import { useEffect } from 'react'
import Head from 'next/head'
import { Header, Container, Image } from 'semantic-ui-react'
import { LinkList } from '../../generic-components/LinkList'
import { API } from '../../../API'

const getBackgroundStyle = (backgroundColor) => {
  if (backgroundColor?.length === 7) {
    return { minHeight: '100vh', backgroundColor }
  } else if (backgroundColor?.length > 7) {
    return { minHeight: '100vh', backgroundImage: backgroundColor }
  } else {
    return { minHeight: '100vh' }
  }
}

export const Link = ({ account, preview }) => {
  const registerView = async () => {
    try {
      const viewDetails = {}
      if (process.browser && !preview) {
        await API.views.recordView(account.id, viewDetails)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(registerView, [])

  return (
    <div style={getBackgroundStyle(account?.backgroundColor)}>
      <Container fluid text textAlign="center">
        <Head>
          <title>{account?.name}</title>
          <meta name="description" content={'bio about myself'} />
        </Head>
        <Image
          centered
          alt={account?.image?.altText}
          src={account?.image?.url}
          size="tiny"
          circular
        />
        <Header>
          {account?.name}
          <Header.Subheader>@{account?.slug}</Header.Subheader>
        </Header>
        <LinkList
          links={account?.links || []}
          preview={preview}
          priorityColor={account?.priorityColor}
          linkColor={account?.linkColor}
        />
      </Container>
    </div>
  )
}

export default Link
