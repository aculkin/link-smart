const Sequelize = require('sequelize')

const db = require('../database')

const Account = db.define(
  'account',
  {
    name: {
      type: Sequelize.STRING,
      require: true,
    },
    slug: {
      type: Sequelize.STRING,
      require: true,
    },
    backgroundColor: {
      type: Sequelize.STRING,
    },
    linkColor: {
      type: Sequelize.STRING,
    },
    priorityColor: {
      type: Sequelize.STRING,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = Account
