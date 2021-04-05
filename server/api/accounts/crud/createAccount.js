const { Account, User_Account } = require('../../../database/models')

const createAccount = async (req, res, next) => {
  try {
    const { name, slug } = req.body
    const createdAccount = await Account.create({ name, slug })
    await User_Account.create({
      admin: true,
      userId: req.user.id,
      accountId: createdAccount.id,
    })
    await createdAccount.setUsers([req.user])
    res.status(200).json(createdAccount)
  } catch (error) {
    next(error)
  }
}

module.exports = createAccount
