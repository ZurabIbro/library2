const ReviewModel = require('../models/Review.model')

module.exports.reviewsController = {
    addReview: (req, res) =>{
        ReviewModel.create({
            userId: req.body.userId,
            reviewTxt: req.body.reviewTxt,
            bookId: req.body.bookId
        }).then(() => {
            res.json('review added')
        })
    },
    getReviews: (req, res) => {
        ReviewModel.find()
        .then((data) => {res.json(data)})
    },
    getReview: (req, res) => {
        ReviewModel.findById(req.params.id)
        .then((data) => {res.json(data)})
    },
    deleteReview: (req, res) =>{
        ReviewModel.findByIdAndDelete(req.params.id)
        .then (() => res.json('review deleted'))
    }
}