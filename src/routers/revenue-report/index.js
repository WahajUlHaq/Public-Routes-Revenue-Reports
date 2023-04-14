const express = require('express')
const router = new express.Router()

const revenueReportController = require ('../../controllers/revenue-report')

router.get('/revenue-report/get/all', revenueReportController.getRevenueReport)

module.exports = router
