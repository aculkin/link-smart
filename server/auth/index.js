const express = require('express')
const router = express.Router()

const { signup, login, me, logout } = require('./methods')

module.exports = router

router.post('/signup', signup)

router.post('/login', login)

router.get('/me', me)

router.post('/logout', logout)
