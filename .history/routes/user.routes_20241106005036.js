const express = require('express')
const {
    listUser,
    createUser,
    updateUser,
} = require('../controllers/user.controller')

const router = express.Router()

router.route('/').post(createUser)
router.route('/').get(listUser)
router.route('/').post(updateUser)
router.route('/').post(createUser)

module.exports.userRoutes = router
