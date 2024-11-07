const express = require('express')
const {
    createPayment,
    listPayment,
    updatePayment,
    deletePayment,
} = require('../controllers/payed.controller')

const router = express.Router()

router.route('/').post(createPayment)
router.route('/').get(listPayment)
router.route('/').put(updatePayment)
router.route('/').delete(deletePayment)

module.exports.salesRouter = router
