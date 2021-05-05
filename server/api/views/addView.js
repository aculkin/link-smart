const { View } = require('../../database/models')

const addView = async (req, res, next) => {
  try {
    const { accountId } = req.params
    const { referrer, deviceType } = req.body
    const view = await View.create({ accountId, referrer, deviceType })
    res.status(200).json(view)
  } catch (error) {
    next(error)
  }
}

module.exports = addView
