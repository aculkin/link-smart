const { Click, View } = require('../../database/models')

const addClick = async (req, res, next) => {
  try {
    const { linkId } = req.params
    const { viewId } = req.body
    const createdClick = await Click.create({ linkId })
    const view = await View.findByPk(viewId)
    await view.update({ clickId: createdClick.id })
    res.status(200).send()
  } catch (error) {
    next(error)
  }
}

module.exports = addClick
