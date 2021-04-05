const { Account } = require('../../../database/models')

const deleteAccount = async (req, res, next) => {
  try {
    const { id } = req.params
    const account = await Account.findByPk(id)
    await account.destroy()
    res.status(200).send()
  } catch (error) {
    next(error)
  }
}

module.exports = deleteAccount
