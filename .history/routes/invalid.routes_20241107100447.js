const express = require('express')

const router = express.Router()

router.route('/').post()
router.route('/').get()
router.route('/').put()
router.route('/').delete()

module.exports.invalidRouter = router
