const z = require('zod')

const playerSchema = z.object({
  name: z.string().min(5, {message: "Must be at least 5 characters"}).max(15, {message: "Must be at most 15 characters"}),
  age: z.number().min(10, {message: "Must be at least 10 years old"}),
  position: z.string(),
  teamId: z.string().uuid(),
  userId: z.string().uuid().optional(),
  height: z.number().min(140, {message: "Must be at least 140 cm"}),
  attackReach: z.number().min(250, {message: "Must be at least 250 cm"}),
  blockReach: z.number().min(243, {message: "Must be at least 243 cm"})
})