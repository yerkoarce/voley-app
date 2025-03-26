const { Schema, model } = require('mongoose')

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    ytpe: Number,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  attackReach: {
    type: Number,
    defaulte: 0
  },
  blockReach: {
    type: Number,
    default: 0
  },
  attack: {
    type: Number,
    default: 0
  },
  reception: {
    type: Number,
    default: 0
  },
  serve: {
    type: Number,
    default: 0
  },
  setting: {
    type: Number,
    default: 0
  }
})

module.exports = model('Player', playerSchema)