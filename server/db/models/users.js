const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    dob: {
      type: String,
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
    municipality: {
      type: String,
      requred: true
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
    }
  },
  {
    timestamps: true
  }
);
const User = mongoose.model('User', userSchema);
module.exports = User;
