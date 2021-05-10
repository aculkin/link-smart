const { Click, View } = require('../../database/models')

const registerSocialClick = async (req, res, next) => {
  try {
    const { socialClickType } = req.params
    const { viewId } = req.body
    if (viewId) {
      const createdClick = await Click.create({ socialClickType })
      const view = await View.findByPk(viewId)
      await view.update({ clickId: createdClick.id })
      res.status(200).send()
    } else {
      res.status(201).send()
    }
  } catch (error) {
    next(error)
  }
}

module.exports = registerSocialClick
