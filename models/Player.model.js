const { Schema, model } = require('mongoose')

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  teamId: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
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
  }
})

module.exports = model('Player', playerSchema)