const express = require('express')
const {
    createWorkerHistory,
} = require('../controllers/worker-history.controller')

const router = express.Router()

router.route('/').post(createWorkerHistory)
router.route('/').get(listHis)
router.route('/').put(updateSales)
router.route('/').delete(deleteSales)

module.exports.salesRouter = router
