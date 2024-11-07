const express = require('express')
const {
    // createProduct,
    // listProduct,
    // updateProduct,
    // deleteProduct,
    createOrder,
    listOrder,
} = require('../controllers/order.controller')

const router = express.Router()

router.route('/').post(createOrder)
router.route('/').get(listOrder)
// router.route('/').put(updateProduct)
// router.route('/').delete(deleteProduct)

module.exports.orderRouter = router
