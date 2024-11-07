const express = require('express')
const { listUser, createUser } = require('../controllers/user.controller')

const router = express.Router()

router.route('/').post(createUser)
router.route('/').get(listUser)
router.route('/').post(createUser)
router.route('/').post(createUser)

module.exports.userRoutes = router
