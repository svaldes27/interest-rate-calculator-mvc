class InterestController {
  constructor () {
    this.renderInterestRatePerYears = this.renderInterestRatePerYears.bind(this)
  }

  getInterestRatePerYears (yearsQty, interestRate, capital) {
    return capital * (interestRate / 100) * yearsQty
  }

  renderInterestRateCalculatorForm (req, res) {
    res.render('interest-rate-form')
  }

  renderInterestRatePerYears (req, res) {
    const yearsQty = req.body.yearsQty
    const interestRate = parseFloat(req.body.interestRate)
    const capital = req.body.capital

    res.render('interest-per-year', {
      yearsQty,
      interestRate,
      capital,
      totalInterestRate: this.getInterestRatePerYears(yearsQty, interestRate, capital)
    })
  }
}

module.exports = InterestController
