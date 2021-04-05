const User = require('./user')
const Account = require('./account')
const User_Account = require('./user_account')
const Link = require('./link')

const Image = require('./image')

User.belongsToMany(Account, { through: User_Account })
Account.belongsToMany(User, { through: User_Account })

Account.hasMany(Link)
Link.belongsTo(Account)

//Image associations
User.belongsTo(Image)
Account.belongsTo(Image)
Link.belongsTo(Image)

module.exports = {
  User,
  Account,
  User_Account,
  Link,
  Image,
}
