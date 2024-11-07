const express = require('express')
const {
    listUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/user.controller')

const router = express.Router()

router.route('/a').get((req, res) => {
    res.send('Sernekr')
    console.log('asas')
})
router.route('/').post(createUser)
router.route('/s').get(listUser)
router.route('/').put(updateUser)
router.route('/').delete(deleteUser)

module.exports.userRoutes = router
