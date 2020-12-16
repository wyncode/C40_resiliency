const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  aidType: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  photo: {
    type: Image,
    required: false
  },
  resolution: {
    type: String,
    default: false
  }
});
const Request = mongoose.model('Request', userSchema);
module.exports = Request;
