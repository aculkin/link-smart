'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('views', 'clickId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'clicks',
        key: 'id',
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('views', 'clickId')
  },
}
