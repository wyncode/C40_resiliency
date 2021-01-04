if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('../config/');

const Request = require('../models/request'),
  User = require('../models/user'),
  faker = require('faker'),
  mongoose = require('mongoose');

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Request.countDocuments({}, function (err, count) {
    console.log('Number of requests:', count);
  });

  const userIdArray = [];

  for (let i = 0; i < 100; i++) {
    const user = new User({
      firstName: `${faker.name.firstName()}`,
      lastName: `${faker.name.lastName()}`,
      admin: Boolean(Math.round(Math.random())),
      email: faker.internet.email(),
      password: faker.internet.password(),
      dob: faker.date.past(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode()
    });
    await user.generateAuthToken();
    userIdArray.push(user._id);
  }
  const AID_TYPES = [
    'water',
    'food',
    'health services',
    "children's education"
  ];
  for (let i = 0; i < 100; i++) {
    const request = new Request({
      aidType: [AID_TYPES[Math.floor(Math.random() * AID_TYPES.length)]],
      resolution: Boolean(Math.round(Math.random())),
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)]
    });
    await request.save();
  }
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Request.countDocuments({}, function (err, count) {
    console.log('Number of requests:', count);
  });
};

dbReset();
