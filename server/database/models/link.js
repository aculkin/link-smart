const Sequelize = require('sequelize')

const db = require('../database')

const Link = db.define(
  'link',
  {
    name: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
      require: true,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = Link
