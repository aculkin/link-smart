const { createHash } = require('crypto')

const encryptPassword = (plainText, salt) =>
  createHash('RSA-SHA256').update(plainText).update(salt).digest('hex')

module.exports = encryptPassword
