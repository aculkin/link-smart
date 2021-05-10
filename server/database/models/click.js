const Sequelize = require('sequelize')

const db = require('../database')

const { clicks } = require('./model-value-options')

const Click = db.define(
  'click',
  {
    socialClickType: {
      type: Sequelize.ENUM(clicks.socialClickType.options),
    },
  },
  {
    paranoid: true,
  }
)

module.exports = Click
