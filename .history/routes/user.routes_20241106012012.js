const express = require('express')
const {
    listUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/user.controller')

const router = express.Router()

router.route('/a')
router.route('/').post(createUser)
router.route('/').get(listUser)
router.route('/').post(updateUser)
router.route('/').post(deleteUser)

module.exports.userRoutes = router
