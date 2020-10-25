const { Schema, model } = require('mongoose');
const { USER, MODERATOR, ADMIN } = require('../constants/roles');

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [USER, MODERATOR, ADMIN],
    default: USER,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('User', schema);
