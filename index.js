const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.json())
app.use(require('./routes/users.route'))
app.use(require('./routes/books.route'))
app.use(require('./routes/reviews.route'))
app.use(require('./routes/genres.route'))


mongoose.connect('mongodb+srv://Zurab:qwerty123@library2.e6wxtdj.mongodb.net/librbr')
.then(() => console.log('Connected - MongoDB'))
.catch(() => console.log('Connection failed - MongoDB'))

app.listen(4444, () => console.log('Connected to server'))