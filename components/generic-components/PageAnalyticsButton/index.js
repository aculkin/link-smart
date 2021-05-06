import { useState } from 'react'
import { Button, Icon, Label, Modal, Menu } from 'semantic-ui-react'

import { Devices } from './Devices'
import { Referrers } from './Referrers'
import { Views } from './Views'
import { calculateClickThroughRate } from '../../../utility/front-end'

export const PageAnalyticsButton = ({ account }) => {
  const [activeTab, setActiveTab] = useState(1)
  const [modalOpen, setModalOpen] = useState()
  const toggleOpen = (state) => () => {
    state === true || state === false
      ? setModalOpen(state)
      : setModalOpen(!modalOpen)
  }

  const changeTab = (tabNumber) => () => {
    setActiveTab(tabNumber || 1)
  }

  const clickThroughRate = calculateClickThroughRate(account?.views)

  return (
    <>
      <Button onClick={toggleOpen()} as="a" labelPosition="right">
        <Button icon>
          <Icon name="chart bar" />
        </Button>
        <Label>
          Page Views:
          <Label.Detail>{account?.views?.length || 0}</Label.Detail>
        </Label>
      </Button>
      <Modal
        centered={false}
        closeIcon
        open={modalOpen}
        onOpen={toggleOpen(true)}
        onClose={toggleOpen(false)}
        style={{ minHeignt: '500px' }}
      >
        <Modal.Header>
          Account analytics for {account?.name} (@{account?.slug})
        </Modal.Header>
        <Modal.Content>
          <Menu pointing secondary>
            <Menu.Item
              name="Views"
              active={activeTab === 1}
              onClick={changeTab(1)}
            />
            <Menu.Item
              name="Referrers"
              active={activeTab === 2}
              onClick={changeTab(2)}
            />
            <Menu.Item
              name="Devices"
              active={activeTab === 3}
              onClick={changeTab(3)}
            />
          </Menu>
          {activeTab === 1 && <Views views={account?.views || []} />}
          {activeTab === 2 && <Referrers views={account?.views || []} />}
          {activeTab === 3 && <Devices views={account?.views || []} />}
          {/* <p>
            Click Through Rate: {(clickThroughRate * 100)?.toFixed(2) || '-'}%
          </p> */}
        </Modal.Content>
      </Modal>
    </>
  )
}
