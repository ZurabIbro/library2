const { Router } = require('express')
const { reviewsController } = require('../controllers/reviews.controller')
const router = Router()

router.post('/reviews',reviewsController.addReview)
router.get('/reviews',reviewsController.getReviews)
router.get('/reviews/:id',reviewsController.getReview)
router.delete('/reviews/:id', reviewsController.deleteReview)
module.exports = router