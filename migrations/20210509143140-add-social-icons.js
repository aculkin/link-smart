'use strict'

const { clicks } = require('../server/database/models/model-value-options')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('clicks', 'mobile')
    await queryInterface.removeColumn('clicks', 'deviceType')
    await queryInterface.removeColumn('clicks', 'country')
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_clicks_socialClickType"'
    )
    await queryInterface.addColumn('clicks', 'socialClickType', {
      type: Sequelize.ENUM(clicks.socialClickType.options),
    })
    await queryInterface.addColumn('accounts', 'displaySocialBottom', {
      type: Sequelize.BOOLEAN,
    })
    await queryInterface.addColumn('accounts', 'facebookUrl', {
      type: Sequelize.STRING,
    })
    await queryInterface.addColumn('accounts', 'instagramUrl', {
      type: Sequelize.STRING,
    })
    await queryInterface.addColumn('accounts', 'linkedInUrl', {
      type: Sequelize.STRING,
    })
    await queryInterface.addColumn('accounts', 'youtubeUrl', {
      type: Sequelize.STRING,
    })
    await queryInterface.addColumn('accounts', 'tikTokUrl', {
      type: Sequelize.STRING,
    })
    return queryInterface.addColumn('accounts', 'displaySocial', {
      type: Sequelize.BOOLEAN,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('accounts', 'facebookUrl')
    await queryInterface.removeColumn('accounts', 'instagramUrl')
    await queryInterface.removeColumn('accounts', 'linkedInUrl')
    await queryInterface.removeColumn('accounts', 'youtubeUrl')
    await queryInterface.removeColumn('accounts', 'tikTokUrl')
    await queryInterface.removeColumn('accounts', 'displaySocial')
    await queryInterface.removeColumn('accounts', 'displaySocialBottom')
    await queryInterface.removeColumn('clicks', 'socialClickType')
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_clicks_socialClickType"'
    )
    await queryInterface.addColumn('clicks', 'mobile', {
      type: Sequelize.BOOLEAN,
    })
    await queryInterface.addColumn('clicks', 'deviceType', {
      type: Sequelize.STRING,
    })
    await queryInterface.addColumn('clicks', 'country', {
      type: Sequelize.STRING,
    })
  },
}
