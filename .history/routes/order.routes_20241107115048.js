const express = require('express')
const {
    // createProduct,
    // listProduct,
    // updateProduct,
    // deleteProduct,
    createOrder,
    listOrder,
    updateOrder,
    deleteOrder,
} = require('../controllers/order.controller')

const router = express.Router()

router.route('/').post(createOrder)
router.route('/').get(listOrder)
router.route('/').put(updateOrder)
router.route('/').delete(deleteOrder)

module.exports.orderRouter = router
