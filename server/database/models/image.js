const Sequelize = require('sequelize')

const db = require('../database')

const Image = db.define(
  'image',
  {
    key: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
      require: true,
    },
    altText: {
      type: Sequelize.STRING,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = Image
