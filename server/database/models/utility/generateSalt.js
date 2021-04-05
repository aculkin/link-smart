const { randomBytes } = require('crypto')

const generateSalt = () => randomBytes(16).toString('base64')

module.exports = generateSalt