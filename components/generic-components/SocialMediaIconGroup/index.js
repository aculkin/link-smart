import { useRouter } from 'next/router'
import { Icon } from 'semantic-ui-react'

export const SocialMediaIconGroup = ({ account, preview }) => {
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

  const goToLink = (link) => () => {
    if (link.startsWith('https://') || link.startsWith('http://')) {
      router.push(link)
    } else {
      router.push(`https://${link}`)
    }
  }

  return (
    <>
      {displaySocial ? (
        <>
          {facebookUrl && (
            <Icon
              onClick={goToLink(facebookUrl)}
              color={linkColor}
              circular
              inverted
              name="facebook"
              link
            />
          )}
          {instagramUrl && (
            <Icon
              onClick={goToLink(facebookUrl)}
              color={linkColor}
              circular
              inverted
              name="instagram"
              link
            />
          )}
          {linkedInUrl && (
            <Icon
              onClick={goToLink(facebookUrl)}
              color={linkColor}
              circular
              inverted
              name="linkedin"
              link
            />
          )}
          {youtubeUrl && (
            <Icon
              onClick={goToLink(facebookUrl)}
              color={linkColor}
              circular
              inverted
              name="youtube"
              link
            />
          )}
          {tikTokUrl && (
            <Icon
              onClick={goToLink(tikTokUrl)}
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
