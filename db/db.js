const mongoose = require('mongoose')
const debugDB = require('debug')('voley-app:db')

// mongo URI = "mongodb+srv://yerkoarcegalaz:1SZddpSYM6nEiQ15@voley-app.z5bc97a.mongodb.net/?retryWrites=true&w=majority&appName=voley-app"
// Borrar despues esto y el commit

const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    debugDB(`Connected to ${conn.connection.name}`)
  } catch (err) {
    debugDB('Error connecting to the database', err)
    process.exit(1)
  }
}

process.on('SIGINT', async () => {
  await mongoose.connection.close()
  console.log('Conexión a MongoDB cerrada.')
  process.exit(0)
})

module.exports = db