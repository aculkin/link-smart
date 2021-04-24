const express = require('express')
const router = express.Router()

const addView = require('./addView')

module.exports = router

router.post('/account/:accountId', addView)
