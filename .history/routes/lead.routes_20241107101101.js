const express = require('express')
const {
    createLead,
    listLead,
    updateLead,
    deleteLead,
} = require('../controllers/lead.controller')

const router = express.Router()

router.route('/').post(createLead)
router.route('/').get(listLead)
router.route('/').put(updateLead)
router.route('/').delete(deleteLead)

module.exports.salesRouter = router
