const { View } = require('../../database/models')

const addView = async (req, res, next) => {
  try {
    const { accountId } = req.params
    await View.create({ accountId })
    res.status(200).send()
  } catch (error) {
    next(error)
  }
}

module.exports = addView
