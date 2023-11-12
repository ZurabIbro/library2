const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    reviewTxt: {
        type: String,
    },
    bookId:{
        type: Schema.Types.ObjectId,
        ref:'books'
    }
})

module.exports = mongoose.model('reviews', reviewSchema)