const { Account, User_Account } = require('../../../database/models')

const createAccount = async (req, res, next) => {
  try {
    const { name, slug } = req.body
    const existingAccount = await Account.findOne({ where: { slug } })
    if (!existingAccount) {
      const createdAccount = await Account.create({ name, slug })
      await User_Account.create({
        admin: true,
        userId: req.user.id,
        accountId: createdAccount.id,
      })
      await createdAccount.setUsers([req.user])
      res.status(200).json(createdAccount)
    } else {
      res
        .status(405)
        .json(
          'There is already an account with that slug, please select a different slug'
        )
    }
  } catch (error) {
    next(error)
  }
}

module.exports = createAccount
