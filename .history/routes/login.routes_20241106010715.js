const express = require('express')
const router = express.Router()

router.route('/').post(createUser)
router.route('/').get(listUser)
router.route('/').post(updateUser)
router.route('/').post(deleteUser)

module.exports.loginRoutes = router
