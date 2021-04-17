'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('links', 'passthrough', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }),
      queryInterface.addColumn('links', 'active', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }),
      queryInterface.addColumn('links', 'priority', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }),
      queryInterface.addColumn('links', 'startDisplay', {
        type: Sequelize.DATE,
      }),
      queryInterface.addColumn('links', 'endDisplay', {
        type: Sequelize.DATE,
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('links', 'passThrough'),
      queryInterface.removeColumn('links', 'active'),
      queryInterface.removeColumn('links', 'priority'),
      queryInterface.removeColumn('links', 'startDisplay'),
      queryInterface.removeColumn('links', 'endDisplay'),
    ])
  },
}
