const { Link } = require('../../../database/models')

const deleteLink = async (req, res, next) => {
  try {
    const { id } = req.params
    const link = await Link.findByPk(id)
    await link.destroy()
    res.status(200).send()
  } catch (error) {
    next(error)
  }
}

module.exports = deleteLink
