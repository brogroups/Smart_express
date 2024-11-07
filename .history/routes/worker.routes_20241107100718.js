const express = require('express')
const {
    createWorker,
    listWorkers,
    updateWorker,
    deleteWorker,
} = require('../controllers/worker.controller')

const router = express.Router()

router.route('/').post(createWorker)
router.route('/').get(listWorkers)
router.route('/').put(updateWorker)
router.route('/').delete(deleteWorker)

module.exports.salesRouter = router
