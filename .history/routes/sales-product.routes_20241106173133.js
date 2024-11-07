const express = require('express')
const {
    createSales,
    listSales,
    updateSales,
} = require('../controllers/sales-product.controller')

const router = express.Router()

router.route('/').post(createSales)
router.route('/').get(listSales)
router.route('/').put(updateSales)
router.route('/').delete(deleteProduct)

module.exports.productRouter = router
