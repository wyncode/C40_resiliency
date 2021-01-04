const mongoose = require('mongoose');

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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
const Request = mongoose.model('Request', requestSchema);
module.exports = Request;
