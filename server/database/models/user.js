const Sequelize = require('sequelize')

const { setSaltAndPassword, encryptPassword } = require('./utility')
const db = require('../database')

const ONE_HOUR_IN_MS = 3600000

const User = db.define(
  'user',
  {
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
  },
  {
    paranoid: true,
  }
)

//Instance methods
User.prototype.correctPassword = function (enteredPassword) {
  return this.password() && this.salt()
    ? encryptPassword(enteredPassword, this.salt()) === this.password()
    : false
}

User.prototype.setPasswordResetToken = async function (token) {
  return this.update({
    resetPasswordToken: token,
    resetPasswordExpires: Date.now() + ONE_HOUR_IN_MS,
  })
}

//Class Methods
User.findByEmail = async function (email) {
  return this.findOne({
    where: {
      email: email.toLowerCase(),
    },
  })
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

module.exports = User
