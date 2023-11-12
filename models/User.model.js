const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isBlocked:{
        type: Boolean,
        default: false
    },
    rentedBooks: [{
        type: Schema.Types.ObjectId,
        ref: 'books'
    }]

})

module.exports = mongoose.model('users', userSchema)