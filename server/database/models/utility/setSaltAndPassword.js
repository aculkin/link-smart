const generateSalt = require('./generateSalt')
const encryptPassword = require('./encryptPassword')

const setSaltAndPassword = (user) => {
  if (user.changed('password')) {
    const salt = generateSalt()
    user.salt = salt
    user.password = encryptPassword(user.password(), salt)
  }
}

module.exports = setSaltAndPassword
