const { Account, Link, Image } = require('../server/database/models')

const getAccountWithLinks = async (slug) => {
  try {
    const account = await Account.findOne({
      where: { slug },
      include: [
        {
          model: Link,
          where: { active: true },
          attributes: [
            'id',
            'name',
            'url',
            'accountId',
            'imageId',
            'passthrough',
            'priority',
          ],
        },
        {
          model: Image,
          attributes: ['id', 'key', 'url', 'altText'],
        },
      ],
      attributes: ['id', 'name', 'slug', 'imageId'],
    })
    return JSON.parse(JSON.stringify(account))
  } catch (error) {
    console.log(error)
  }
}

module.exports = getAccountWithLinks
