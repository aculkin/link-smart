'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'clicks',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        linkId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'links',
            key: 'id',
          },
        },
        mobile: {
          type: Sequelize.BOOLEAN,
        },
        deviceType: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
        deletedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        engine: 'PostgreSQL',
        paranoid: true,
      }
    )
    await queryInterface.createTable(
      'views',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        accountId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'accounts',
            key: 'id',
          },
        },
        mobile: {
          type: Sequelize.BOOLEAN,
        },
        deviceType: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
        deletedAt: {
          type: Sequelize.DATE,
        },
      },
      { engine: 'PostgreSQL', paranoid: true }
    )
    return Promise.all([
      queryInterface.addColumn('accounts', 'backgroundColor', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('accounts', 'linkColor', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('accounts', 'priorityColor', {
        type: Sequelize.STRING,
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('accounts', 'backgroundColor'),
      queryInterface.removeColumn('accounts', 'linkColor'),
      queryInterface.removeColumn('accounts', 'priorityColor'),
      queryInterface.dropTable('views'),
      queryInterface.dropTable('clicks'),
    ])
  },
}
