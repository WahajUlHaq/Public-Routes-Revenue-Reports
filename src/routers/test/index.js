const express = require('express')
const router = new express.Router()

const testController = require ('../../controllers/test')
const authenticateUser = require('../../middleware/authentication')

router.get('/test-with-auth', authenticateUser, testController.testApiWithAuthMiddleware)
router.get('/test-without-auth', testController.testApiWithoutAuthMiddleware)

module.exports = router
