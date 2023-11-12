const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model('genres', genreSchema)