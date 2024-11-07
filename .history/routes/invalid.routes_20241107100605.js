const express = require('express')
const { createInvalid } = require('../controllers/invalid.controller')

const router = express.Router()

router.route('/').post(createInvalid)
router.route('/').get(listI)
router.route('/').put()
router.route('/').delete()

module.exports.invalidRouter = router
