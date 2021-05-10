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
    facebookUrl: {
      type: Sequelize.STRING,
    },
    instagramUrl: {
      type: Sequelize.STRING,
    },
    linkedInUrl: {
      type: Sequelize.STRING,
    },
    youtubeUrl: {
      type: Sequelize.STRING,
    },
    tikTokUrl: {
      type: Sequelize.STRING,
    },
    displaySocial: {
      type: Sequelize.BOOLEAN,
    },
    displaySocialBottom: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = Account
