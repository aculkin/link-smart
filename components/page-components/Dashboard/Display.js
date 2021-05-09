import { useSelector } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'

import { IphoneContainer } from '../../generic-components/IphoneContainer'
import { Link } from '../../page-components/Link'

import { copyToClipboard } from '../../../utility/front-end'

export const Display = ({ selectedAccount }) => {
  const links = useSelector((state) => state.links)
  return (
    <>
      <Button.Group fluid style={{ paddingBottom: '10px' }}>
        <Button
          primary
          onClick={copyToClipboard(`linksmart.app/${selectedAccount?.slug}`)}
        >
          <Icon name="copy" />
          Copy link
        </Button>
        <Button href={`/${selectedAccount?.slug}`} target="_blank">
          <Icon name="external" /> linksmart.app/{selectedAccount?.slug}
        </Button>
      </Button.Group>
      <IphoneContainer
        backgroundColor={selectedAccount?.backgroundColor}
        linkName={selectedAccount?.name}
      >
        <Link
          account={{
            ...selectedAccount,
            links: links.filter((link) => link?.active && link?.url),
          }}
          preview={true}
        />
      </IphoneContainer>
    </>
  )
}

export default Display
