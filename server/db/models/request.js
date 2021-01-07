const mongoose = require('mongoose');
var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'openstreetmap'

  // Optionnal depending of the providers
  // httpAdapter: 'https', // Default
  // apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
  // formatter: null // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);
const requestSchema = new mongoose.Schema({
  aidType: {
    type: [String],
    required: true,
    enum: ['water', 'food', 'health services', "children's education"]
  },
  description: {
    type: String
  },
  photo: {
    type: String
  },
  resolution: {
    type: Boolean,
    default: false
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
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  zip: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

requestSchema.pre('save', async function (next) {
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

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;
