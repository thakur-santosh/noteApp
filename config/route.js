const express = require('express')
const router = express.Router()

const noteController = require('../app/controllers/noteController')
const categoryController = require('../app/controllers/categoryController')


router.get('/notes',noteController.list)
router.post('/notes',noteController.add)
router.get('/notes/:id',noteController.show)

router.get('/category',categoryController.list)
router.post('/category',categoryController.add)
router.get('/category/:id',categoryController.show)
router.put('/category/:id',categoryController.update)
router.delete('/category/:id',categoryController.destroy)

module.exports = router