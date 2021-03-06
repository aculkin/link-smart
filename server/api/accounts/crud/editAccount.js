const { Account } = require('../../../database/models')
const { Op } = require('sequelize')

const editAccount = async (req, res, next) => {
  try {
    const { id } = req.params
    const {
      name,
      slug,
      backgroundColor,
      linkColor,
      priorityColor,
      facebookUrl,
      instagramUrl,
      linkedInUrl,
      youtubeUrl,
      tikTokUrl,
      displaySocial,
      displaySocialBottom,
    } = req.body

    const existingAccount = await Account.findOne({
      where: { slug, id: { [Op.ne]: id } },
    })
    if (existingAccount) {
      const account = await Account.findByPk(id)
      res.status(205).json(account)
    } else {
      const account = await Account.findByPk(id)
      const updatedAccount = await account.update({
        name,
        slug,
        backgroundColor,
        linkColor,
        priorityColor,
        facebookUrl,
        linkedInUrl,
        youtubeUrl,
        tikTokUrl,
        displaySocial,
        instagramUrl,
        displaySocialBottom,
      })
      res.status(200).json(updatedAccount)
    }
  } catch (error) {
    next(error)
  }
}

module.exports = editAccount
