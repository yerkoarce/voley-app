const { Schema , model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 15
  },
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: 5,
    maxLength: 15
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 20
  }
})

module.exports = model('User', userSchema)