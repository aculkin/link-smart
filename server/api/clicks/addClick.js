const { Click } = require('../../database/models')

const addClick = async (req, res, next) => {
  try {
    const { linkId } = req.params
    await Click.create({ linkId })
    res.status(200).send()
  } catch (error) {
    next(error)
  }
}

module.exports = addClick
