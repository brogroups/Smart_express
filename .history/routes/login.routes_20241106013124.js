const express = require('express')
const { loginUser } = require('../controllers/login.controller')
const router = express.Router()

router.route('a').post(loginUser)

module.exports.loginRoutes = router
