const generateSalt = require('./generateSalt')
const encryptPassword = require('./encryptPassword')
const setSaltAndPassword = require('./setSaltAndPassword')

module.exports = {
  generateSalt,
  encryptPassword,
  setSaltAndPassword,
}
