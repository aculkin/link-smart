const { Link } = require('../../../database/models')

const editLink = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, url } = req.body
    const link = await Link.findByPk(id)
    const updatedLink = await link.update({ name, url })
    res.status(200).send(updatedLink)
  } catch (error) {
    next(error)
  }
}

module.exports = editLink