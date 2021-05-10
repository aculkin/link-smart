import { useRouter } from 'next/router'
import { Icon } from 'semantic-ui-react'

import { API } from '../../../API'
import { clicks } from '../../../server/database/models/model-value-options'
import { convertUrl } from '../../../utility/front-end'

export const SocialMediaIconGroup = ({ account, preview, viewId }) => {
  const router = useRouter()
  const {
    displaySocial,
    facebookUrl,
    instagramUrl,
    linkedInUrl,
    youtubeUrl,
    tikTokUrl,
    linkColor,
  } = account

  const goToLink = (link, linkType) => async () => {
    const correctUrl = convertUrl(link)
    try {
      const clickDetails = { viewId }
      if (process.browser && !preview) {
        await API.clicks.registerSocialClick(linkType, clickDetails)
      }
    } catch (error) {
      console.log(error)
    }
    router.push(correctUrl)
  }

  return (
    <>
      {displaySocial ? (
        <>
          {facebookUrl && (
            <Icon
              onClick={goToLink(
                facebookUrl,
                clicks.socialClickType.constants.FACEBOOK
              )}
              color={linkColor}
              circular
              inverted
              name="facebook"
              link
            />
          )}
          {instagramUrl && (
            <Icon
              onClick={goToLink(
                instagramUrl,
                clicks.socialClickType.constants.INSTAGRAM
              )}
              color={linkColor}
              circular
              inverted
              name="instagram"
              link
            />
          )}
          {linkedInUrl && (
            <Icon
              onClick={goToLink(
                linkedInUrl,
                clicks.socialClickType.constants.LINKEDIN
              )}
              color={linkColor}
              circular
              inverted
              name="linkedin"
              link
            />
          )}
          {youtubeUrl && (
            <Icon
              onClick={goToLink(
                youtubeUrl,
                clicks.socialClickType.constants.YOUTUBE
              )}
              color={linkColor}
              circular
              inverted
              name="youtube"
              link
            />
          )}
          {tikTokUrl && (
            <Icon
              onClick={goToLink(
                tikTokUrl,
                clicks.socialClickType.constants.TIK_TOK
              )}
              color={linkColor}
              circular
              inverted
              name="clock"
              link
            />
          )}
        </>
      ) : null}
    </>
  )
}

export default SocialMediaIconGroup
