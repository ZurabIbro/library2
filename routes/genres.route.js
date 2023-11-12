const { Router } = require('express')
const { genresController } = require('../controllers/genres.controller')
const router = Router()

router.post('/genre',genresController.addGenre)
router.get('/genres',genresController.getGenres)

module.exports = router