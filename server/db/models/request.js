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
    type: String,
    required: false
  },
  resolution: {
    type: String,
    default: false
  }
});
const Request = mongoose.model('Request', requestSchema);
module.exports = Request;