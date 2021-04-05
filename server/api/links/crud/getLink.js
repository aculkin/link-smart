const { Link } = require('../../../database/models')

const getLink = async (req, res, next) => {
  try {
    const { id } = req.params
    const link = await Link.findByPk(id)
    res.status(200).json(link)
  } catch (error) {
    next(error)
  }
}

module.exports = getLink
