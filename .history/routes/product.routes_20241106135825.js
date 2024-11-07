const express = require('express')
const {
    createProduct,
    listProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.controller')

const router = express.Router()

router.route('/').post(createProduct)
router.route('/').get(listProduct)
router.route('/').put(updateProduct)
router.route('/').delete(deleteProduct)

module.exports.productRouter = router
