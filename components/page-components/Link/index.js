import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Header, Container, Image } from 'semantic-ui-react'
import { SocialMediaIconGroup } from '../../generic-components/SocialMediaIconGroup'
import { LinkList } from '../../generic-components/LinkList'
import { getReferrer, getDeviceType } from '../../../utility/front-end'
import { API } from '../../../API'

const getBackgroundStyle = (backgroundColor) => {
  if (backgroundColor?.length === 7) {
    return { height: '100%', width: '100%', backgroundColor }
  } else if (backgroundColor?.length > 7) {
    return { height: '100%', width: '100%', backgroundImage: backgroundColor }
  } else {
    return { height: '100%', width: '100%' }
  }
}

export const Link = ({ account, preview }) => {
  const [viewId, setViewId] = useState()
  const registerView = async () => {
    try {
      const viewDetails = {
        referrer: getReferrer(document),
        deviceType: getDeviceType(navigator),
      }
      if (process.browser && !preview) {
        const { data: recordedView } = await API.views.recordView(
          account.id,
          viewDetails
        )
        setViewId(recordedView?.id)
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
        {!account?.displaySocialBottom && (
          <SocialMediaIconGroup account={account} preview={preview} />
        )}
        <LinkList
          viewId={viewId}
          links={account?.links || []}
          preview={preview}
          priorityColor={account?.priorityColor}
          linkColor={account?.linkColor}
        />
        {account?.displaySocialBottom && (
          <SocialMediaIconGroup account={account} preview={preview} />
        )}
      </Container>
    </div>
  )
}

export default Link
