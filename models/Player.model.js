const { Schema, model } = require('mongoose')

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  attack: {
    type: Number,
    default: 0
  },
  reception: {
    type: Number,
    default: 0
  },
  defense: {
    type: Number,
    default: 0
  }
})

module.exports = model('Player', playerSchema)