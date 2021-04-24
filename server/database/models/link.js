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
    passthrough: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    priority: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    startDisplay: {
      type: Sequelize.DATE,
    },
    endDisplay: {
      type: Sequelize.DATE,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = Link
