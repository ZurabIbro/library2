const { Router } = require('express')
const { booksController } = require('../controllers/books.controller')
const router = Router()

router.get('/books', booksController.getBooks)
router.get('/books/:id', booksController.getBook)
router.post('/admin/books', booksController.addBook)
router.delete('/admin/books/:id', booksController.deleteBook)


module.exports = router