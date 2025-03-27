const { Schema, model } = require('mongoose')

const statSchema = new Schema({
  playerId: { type: Schema.Types.ObjectId, ref: "Jugador" },
  matchId: { type: Schema.Types.ObjectId, ref: "Partido" },
  serves: { 
    positive: Number, 
    negative: Number, 
    neutral: Number 
  },
  attacks: { 
    point: Number, 
    block: Number, 
    neutral: Number,
    error: Number 
  },
  receptions: {
    doublePositive: Number,
    positive: Number,
    negative: Number,
    neutral: Number
  },
  settings: {
    positive: Number,
    neutral: Number,
    error: Number
  }
})