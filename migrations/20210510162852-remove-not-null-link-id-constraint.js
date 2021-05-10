'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('clicks', 'linkId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('clicks', 'linkId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    })
  },
}
