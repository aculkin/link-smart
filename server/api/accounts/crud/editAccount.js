const { Account } = require('../../../database/models')

const editAccount = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, slug } = req.body
    const account = await Account.findByPk(id)
    const updatedAccount = await account.update({ name, slug })
    res.status(200).send(updatedAccount)
  } catch (error) {
    next(error)
  }
}

module.exports = editAccount
