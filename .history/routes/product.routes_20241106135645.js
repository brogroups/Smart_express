const express = require('express')

const router = express.Router()

router.route('/').post(createP)
router.route('/').get(listUser)
router.route('/').put(updateUser)
router.route('/').delete(deleteUser)

module.exports.userRoutes = router
