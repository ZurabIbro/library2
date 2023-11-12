const { json } = require('express')
const BookModel = require('../models/Book.model')
const UserModel = require('../models/User.model')

module.exports.usersController = {
    addUser: (req, res) => {
        UserModel.create({
            userName: req.body.userName,
            email: req.body.email
        }).then(() => res.json('user added'))
    },
    getUsers: (req, res) => {
        UserModel.find({})
        .then((data) => {
            res.json(data)
        })
    },
    getUser: (req, res) => {
        UserModel.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    deleteUser: (req, res) => {
        UserModel.findByIdAndDelete(req.params.id) 
        .then(() => {
            res.json('User has been deleted')
        })
    },
    borrowBook: async (req, res) =>{
        try{
            const user = await UserModel.findById(req.params.userId)
            const book = await BookModel.findById(req.params.bookId)

            if(user.isBlocked === true){
                return res.json('u r blocked' )
            }
            if(user.rentedBooks.length === 3){
                return res.json('u cant borrow more than 3 books' )
            }
            if(book.borrowId !== null){
                return res.json('book is already rented' )

            }

            await UserModel.findByIdAndUpdate(req.params.userId, {$push:{rentedBooks: req.params.bookId}})
            await BookModel.findByIdAndUpdate(req.params.bookId, {borrowId: req.params.userId})



        }catch (error){
            res.json(error)
        }
        
    },
    deleteBorrowedBook: async (req, res)=>{
        try{
            await UserModel.findByIdAndUpdate(req.params.userId, {$pull: {rentedBooks: req.params.bookId}})
            await BookModel.findByIdAndUpdate(req.params.bookId, {borrowId: null})
            res.json('deleted')
        }catch(error){
            res.json(error)

        }
        
    }
    

    
}