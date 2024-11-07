const express = require('express')

const router = express.Router()

router.route('/').post(createUser)
router.route('/').get(list)
router.route('/').post(createUser)
router.route('/').post(createUser)

module.exports.userRoutes = router
