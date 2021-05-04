const { User, Account, View } = require('../../../database/models')

const loadMyAccounts = async (req, res, next) => {
  try {
    const accounts = await req?.user?.getAccounts({
      include: [{ model: View }],
    })
    res.status(200).json(accounts || null)
  } catch (error) {
    next(error)
  }
}

module.exports = loadMyAccounts
