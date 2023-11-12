const BookModel = require('../models/Book.model')

module.exports.booksController = {
    addBook: (req, res) => {
        BookModel.create({
            name: req.body.name,
            genre: req.body.genre,
            userId: req.body.userId
        }).then(() => res.json('book added'))
    },
    getBooks: (req, res) => {
        BookModel.find({})
        .then((data) => {
            res.json(data)
        })
    },
    getBook: (req, res) => {
        BookModel.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    deleteBook: (req, res) => {
        BookModel.findByIdAndDelete(req.params.id) 
        .then(() => {
            res.json('Book has been deleted')
        })
    }

    
}