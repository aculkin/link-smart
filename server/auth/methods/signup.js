const { User, Account, User_Account } = require('../../database/models')

const signup = async (req, res, next) => {
  try {
    const { email, firstName, lastName, password, accountSlug } = req.body
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
    })
    let account
    if (accountSlug) {
      account = await Account.create({ slug: accountSlug })
      await User_Account.create({
        admin: true,
        userId: user.id,
        accountId: account.id,
        name: accountSlug,
      })
    }
    req.login(user, (error) => {
      error ? next(error) : res.json({ user, account })
    })
  } catch (error) {
    next(error)
  }
}

module.exports = signup
