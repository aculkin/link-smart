'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'images',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        key: {
          type: Sequelize.STRING,
        },
        url: {
          type: Sequelize.STRING,
          require: true,
        },
        altText: {
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
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        firstName: {
          type: Sequelize.STRING,
        },
        lastName: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
          get() {
            return () => this.getDataValue('password')
          },
        },
        salt: {
          type: Sequelize.STRING,
          get() {
            return () => this.getDataValue('salt')
          },
        },
        googleId: {
          type: Sequelize.STRING,
        },
        resetPasswordToken: {
          type: Sequelize.STRING,
        },
        resetPasswordExpires: {
          type: Sequelize.DATE,
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
      'accounts',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          require: true,
        },
        slug: {
          type: Sequelize.STRING,
          require: true,
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
    return queryInterface.createTable(
      'user_accounts',
      {
        admin: {
          type: Sequelize.BOOLEAN,
          default: false,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_accounts')
    await queryInterface.dropTable('users')
    await queryInterface.dropTable('accounts')
    return queryInterface.dropTable('images')
  },
}
