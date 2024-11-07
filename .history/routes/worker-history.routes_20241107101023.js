const express = require('express')
const {
    createWorkerHistory,
    listWorkerHistories,
    updateWorkerHistory,
    deleteWorkerHistory,
} = require('../controllers/worker-history.controller')

const router = express.Router()

router.route('/').post(createWorkerHistory)
router.route('/').get(listWorkerHistories)
router.route('/').put(updateWorkerHistory)
router.route('/').delete(deleteWorkerHistory)

module.exports.salesRouter = router
