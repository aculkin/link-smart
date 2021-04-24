const Sequelize = require('sequelize')

const db = require('../database')

const Click = db.define(
  'click',
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

module.exports = Click
