const express = require('express')
const router = express.Router()

const {
  createAccount,
  editAccount,
  deleteAccount,
  getAccount,
} = require('./crud')
const { loadMyAccounts, checkSlug } = require('./other')
const { isLoggedIn } = require('../utility')

module.exports = router

router.get('/check-slug/:slug', checkSlug)

router.get('/my-accounts', loadMyAccounts)

router.post('/', createAccount)

router.get('/:id', getAccount)

router.put('/:id', editAccount)

router.delete('/:id', deleteAccount)
