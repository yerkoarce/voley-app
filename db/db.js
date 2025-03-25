const mongoose = require('mongoose')
const debugDB = require('debug')('voley-app:db')

const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    debugDB(`Connected to ${conn.connection.name}`)
  } catch (err) {
    debugDB('Error connecting to the database', err)
    process.exit(1)
  }
}

module.exports = db