const Sequelize = require('sequelize')

const db = require('../database')

const View = db.define(
  'view',
  {
    mobile: {
      type: Sequelize.BOOLEAN,
    },
    deviceType: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = View
