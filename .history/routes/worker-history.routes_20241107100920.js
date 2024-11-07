const express = require('express')

const router = express.Router()

router.route('/').post(createSales)
router.route('/').get(listSales)
router.route('/').put(updateSales)
router.route('/').delete(deleteSales)

module.exports.salesRouter = router
