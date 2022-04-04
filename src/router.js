const express = require('express')
const PageController = require('./controllers/PageController')
const InterestController = require('./controllers/InterestController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const interestController = new InterestController()

// Routes
router.get('/', pageController.renderHome)

router.get('/interest-rate-form', interestController.renderInterestRateCalculatorForm)
router.post('/interest-per-year', interestController.renderInterestRatePerYears)

router.get('*', pageController.renderNotFound)

module.exports = router
