const express = require('express')
const { createProduct } = require('../controllers/product.controller')

const router = express.Router()

router.route('/').post(createProduct)
router.route('/').get(listUser)
router.route('/').put(updateUser)
router.route('/').delete(deleteUser)

module.exports.userRoutes = router
