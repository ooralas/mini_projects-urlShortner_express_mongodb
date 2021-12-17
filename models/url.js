const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    alias: String,
    shortUrl: {type: String, default: ''},
    date: {type: String, default: Date.now}
})

module.exports = mongoose.model('Url', urlSchema)