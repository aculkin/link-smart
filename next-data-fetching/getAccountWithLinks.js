const { Account, Link, Image, View } = require('../server/database/models')

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
      attributes: [
        'id',
        'name',
        'slug',
        'imageId',
        'backgroundColor',
        'linkColor',
        'priorityColor',
        'displaySocial',
        'facebookUrl',
        'instagramUrl',
        'linkedInUrl',
        'youtubeUrl',
        'tikTokUrl',
        'displaySocialBottom',
      ],
    })
    return JSON.parse(JSON.stringify(account))
  } catch (error) {
    console.log(error)
  }
}

module.exports = getAccountWithLinks
