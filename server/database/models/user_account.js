const Sequelize = require('sequelize')

const db = require('../database')

const User_Account = db.define(
  'user_account',
  {
    admin: {
      type: Sequelize.BOOLEAN,
      default: false,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = User_Account
