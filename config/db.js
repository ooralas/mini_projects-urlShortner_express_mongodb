require('dotenv').config()
const mongoose = require('mongoose')
const db = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    })
    console.log('MongoDB is connected')
  } catch (err) {
    console.error(err.message)
    //exit with Failure
    process.exit(1)
  }
}

module.exports = connectDB
