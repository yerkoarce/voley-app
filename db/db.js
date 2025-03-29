const mongoose = require('mongoose')
const debugDB = require('debug')('voley-app:db')

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