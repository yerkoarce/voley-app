const z = require('zod')
const { playerSchema } = require('./playerSchema')

const teamSchema = z.object({
  name: z.string().min(5, {message: "Must be at least 5 characters"}).max(20, {message: "Must be at most 20 characters"}),
  city: z.string().min(5, {message: "Must be at least 5 characters"}).max(20, {message: "Must be at most 20 characters"}),
  coach: z.string().min(5, {message: "Must be at least 5 characters"}).max(20, {message: "Must be at most 20 characters"}),
  reception: z.number().default(0),
  attack: z.number().default(0),
  serve: z.number().default(0),
  players: z.array(playerSchema).default([])
})