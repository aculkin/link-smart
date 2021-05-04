import { useRouter } from 'next/router'
import { Button } from 'semantic-ui-react'
import { API } from '../../../API'

const convertUrl = (uneditedUrl) => {
  const url = uneditedUrl.toLowerCase()
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  } else {
    return `https://${url}`
  }
}

export const Link = ({ link, preview, priorityColor, linkColor }) => {
  const router = useRouter()
  const { id: linkId, name, url, priority } = link

  const navigateToUrl = async () => {
    const correctUrl = convertUrl(url)
    try {
      const clickDetails = {}
      if (process.browser && !preview) {
        await API.clicks.registerClick(linkId, clickDetails)
      }
    } catch (error) {
      console.log(error)
    }
    router.push(correctUrl)
  }

  return (
    <Button
      color={priority ? priorityColor : linkColor}
      onClick={navigateToUrl}
      fluid
      size="large"
      style={{
        paddingRight: '3px',
        paddingLeft: '3px',
        marginTop: '5px',
        marginBottom: '5px',
      }}
    >
      {name}
    </Button>
  )
}

export default Link
