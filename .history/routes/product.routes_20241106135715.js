const express = require('express')
const {
    createProduct,
    listProduct,
} = require('../controllers/product.controller')

const router = express.Router()

router.route('/').post(createProduct)
router.route('/').get(listProduct)
router.route('/').put(updateUser)
router.route('/').delete(deleteUser)

module.exports.userRoutes = router
