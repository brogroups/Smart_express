const express = require('express')
const {
    createSales,
    listSales,
    updateSales,
    deleteSales,
} = require('../controllers/sales-product.controller')

const router = express.Router()

router.route('/').post(createSales)
router.route('/').get(listSales)
router.route('/').put(updateSales)
router.route('/').delete(deleteSales)

module.exports.salesRouter = router
