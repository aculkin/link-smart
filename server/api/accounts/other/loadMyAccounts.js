const { User, Account } = require('../../../database/models')

const loadMyAccounts = async (req, res, next) => {
  try {
    const accounts = await req?.user?.getAccounts()
    res.status(200).json(accounts || null)
  } catch (error) {
    next(error)
  }
}

module.exports = loadMyAccounts
