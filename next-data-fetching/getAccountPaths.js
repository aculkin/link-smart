const { Account } = require('../server/database/models')

const getAccountPaths = async () => {
  try {
    const accounts = await Account.findAll({ raw: true, attributes: ['slug'] })
    return accounts.map((account) => {
      return { params: { slug: account.slug } }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = getAccountPaths
