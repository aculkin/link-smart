'use strict'

const { views } = require('../server/database/models/model-value-options')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('views', 'mobile')
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_views_deviceType"'
    )
    await queryInterface.changeColumn('views', 'deviceType', {
      type: Sequelize.ENUM(views.deviceType.options),
    })
    return queryInterface.addColumn('views', 'referrer', {
      type: Sequelize.STRING,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('views', 'referrer')
    await queryInterface.changeColumn('views', 'deviceType', {
      type: Sequelize.STRING,
    })
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_views_deviceType"'
    )
    return queryInterface.addColumn('views', 'mobile', {
      type: Sequelize.BOOLEAN,
    })
  },
}
