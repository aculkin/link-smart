const { Link, Click } = require('../../../database/models')

const getAccountLinks = async (req, res, next) => {
  try {
    const { accountId } = req.params
    const links = await Link.findAll({ where: { accountId }, include: Click })
    res.status(200).json(links)
  } catch (error) {
    next(error)
  }
}

module.exports = getAccountLinks
