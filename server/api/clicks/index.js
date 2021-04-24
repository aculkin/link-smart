const express = require('express')
const router = express.Router()

const addClick = require('./addClick')

module.exports = router

router.post('/link/:linkId', addClick)
