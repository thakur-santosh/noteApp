const express = require('express')
const router = express.Router()

const noteController = require('../app/controllers/noteController')

router.get('/notes',noteController.list)
router.post('/notes',noteController.add)

module.exports = router