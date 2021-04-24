const { Account } = require('../../../database/models')

const checkSlug = async (req, res, next) => {
  try {
    const { slug } = req.params
    const existingAccount = await Account.findOne({ where: { slug } })
    if (existingAccount) {
      res.status(200).send('slug in use')
    } else {
      res.status(200).send('slug is open')
    }
  } catch (error) {
    next(error)
  }
}

module.exports = checkSlug
