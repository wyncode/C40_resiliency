const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  Request = require('./request');

const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'openstreetmap'
};

var geocoder = NodeGeocoder(options);

const userSchema = new mongoose.Schema(
  {
    orgName: {
      type: String,
      trim: true
    },

    positionTitle: {
      type: String,
      trim: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    dob: {
      type: Date,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          console.log(value);
          throw new Error('Email is invalid');
        }
      }
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },

    zip: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error("Password can't include password");
        }
        if (value.length < 6) {
          throw new Error('Password must be at least 6 characters long.');
        }
      }
    },
    admin: {
      type: Boolean,
      required: true,
      default: false
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    avatar: {
      type: String
    },

    logo: {
      type: String
    },
    photo: {
      type: String
    },
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    },
    aidType: {
      type: [String],
      required: true,
      enum: ['water', 'food', 'health services', "children's education"]
    },
    aidDesc: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', async function (next) {
  const request = this;
  if (
    request.isModified('address') ||
    request.isModified('city') ||
    request.isModified('state') ||
    request.isModified('zip')
  ) {
    await geocoder.geocode(
      `${request.address} ${request.city} ${request.state} ${request.zip}`,
      async (err, res) => {
        console.log(res);
        request.latitude = await res[0].latitude;
        request.longitude = await res[0].longitude;
      }
    );
  }
});

/**
 * Create a virtual relation between User and request.
 */
userSchema.virtual('requests', {
  ref: 'Request',
  localField: '_id',
  foreignField: 'owner'
});

/**
 * // By naming this instance method toJSON we don't
 * // need to call it for it to run because of our
 * // express res.send or res.json methods calls it for us.
 * @return { firstName, lastName, email, admin, avatar, timestamps }
 */
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};
/**
 * // This instance method will generate a user token
 * // and append it to the user.tokens array in the DB
 * @return { token }
 */

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), name: user.firstName },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

/**
 * // This static method will first find a user by email
 * // and then compare that users password with the
 * // submitted password.
 * // Static methods are run on the actual Model (User), instead
 * // of an instance of a model.
 * @return { user }
 */
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Unable to log in.');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Unable to login.');
  return user;
};

/**
 * // This mongoose middleware will hash our user's passwords
 * // whenever a user is created or a user password is updated.
 * // it doesn't return anything, but calls next instead.  This next
 * // serves the same purpose as the next we have been calling in
 * // express, but it is not the same next.  This one is provided
 * // by mongoose, and the other by express.
 */
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8);

  next();
});

/**
 * Delete user requests when a user is removed.
 */
userSchema.pre('remove', async function (next) {
  const user = this;
  await Request.deleteMany({
    owner: user._id
  });
  next();
});
const User = mongoose.model('User', userSchema);
module.exports = User;
