const express = require('express')
const {
    createFirma,
    listFirma,
    updateFirma,
    deleteFirma,
} = require('../controllers/firma.controller')

const router = express.Router()

router.route('/').post(createFirma)
router.route('/').get(listFirma)
router.route('/').put(updateFirma)
router.route('/').delete(deleteFirma)

module.exports.productRouter = router
