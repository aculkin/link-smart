const Sequelize = require('sequelize')

const { views } = require('./model-value-options')
const db = require('../database')

const View = db.define(
  'view',
  {
    deviceType: {
      type: Sequelize.ENUM(views.deviceType.options),
    },
    country: {
      type: Sequelize.STRING,
    },
    referrer: {
      type: Sequelize.STRING,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = View
