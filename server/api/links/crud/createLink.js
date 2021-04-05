const { Link } = require('../../../database/models')

const createLink = async (req, res, next) => {
  try {
    const { name, url, accountId, imageId } = req.body
    const createdLink = await Link.create({ name, url, accountId, imageId })
    res.status(201).json(createdLink)
  } catch (error) {
    next(error)
  }
}

module.exports = createLink
