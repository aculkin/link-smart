const express = require('express')
const router = express.Router()

module.exports = router

router.use('/accounts', require('./accounts'))

router.use('/links', require('./links'))
