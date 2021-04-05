const { Account } = require('../../../database/models')

const getAccount = async (req, res, next) => {
  try {
    const { id } = req.params
    const account = await Account.findByPk(id)
    res.status(200).json(account)
  } catch (error) {
    next(error)
  }
}

module.exports = getAccount
