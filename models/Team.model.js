const { Schema, model } = require('mongoose')

const teamSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  coach: {
    type: String,
    required: true
  },
  players: [{
    type: Schema.Types.ObjectId,
    ref: 'Player'
  }],
  reception: {
    type: Number,
    default: 0
  },
  attack: {
    type: Number,
    default: 0
  },
  serve: {
    type: Number,
    default: 0
  }
})

module.exports = model('Team', teamSchema)