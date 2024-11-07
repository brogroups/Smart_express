const express = require('express')
const {
    createProduct,
    listProduct,
    updateProduct,
} = require('../controllers/product.controller')

const router = express.Router()

router.route('/').post(createProduct)
router.route('/').get(listProduct)
router.route('/').put(updateProduct)
router.route('/').delete(deleteUser)

module.exports.userRoutes = router
