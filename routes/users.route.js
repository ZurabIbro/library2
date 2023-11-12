const { Router } = require('express')
const { usersController } = require('../controllers/users.controller')
const router = Router()

router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getUser)
router.post('/users', usersController.addUser)
router.delete('/users/:id', usersController.deleteUser)
router.patch('/users/rent/:userId/:bookId', usersController.borrowBook)
router.patch('/users/unrent/:userId/:bookId', usersController.deleteBorrowedBook)


module.exports = router