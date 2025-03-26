const {  Schema, model } = require('mongoose')

const matchSchema = new Schema({
  team1: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  team2: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  // Posibilidad de mejorar para que se sume el score de ambos equipos
  score: {
    type: String,
  }
})

module.exports = model('Match', matchSchema)