const express = require('express')
const router = express.Router()

const { createLink, getLink, editLink, deleteLink } = require('./crud')
const { getAccountLinks } = require('./other')

module.exports = router

router.post('/', createLink)

router.get('/account/:accountId', getAccountLinks)

router.get('/:id', getLink)

router.put('/:id', editLink)

router.delete('/:id', deleteLink)
