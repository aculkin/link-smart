const express = require('express')
const router = express.Router()

const addClick = require('./addClick')
const registerSocialClick = require('./registerSocialClick')

module.exports = router

router.post('/link/:linkId', addClick)

router.post('/social/:socialClickType', registerSocialClick)
