const express = require('express')

const router = express.Router()

router.route('/').post(createF)
router.route('/').get(listProduct)
router.route('/').put(updateProduct)
router.route('/').delete(deleteProduct)

module.exports.productRouter = router
