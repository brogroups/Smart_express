const express = require('express')
const {
    createInvalid,
    listInvalids,
    updateInvalid,
    deleteInvalid,
} = require('../controllers/invalid.controller')

const router = express.Router()

router.route('/').post(createInvalid)
router.route('/').get(listInvalids)
router.route('/').put(updateInvalid)
router.route('/').delete(deleteInvalid)

module.exports.invalidRouter = router
