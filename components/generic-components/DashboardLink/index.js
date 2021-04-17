import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Item, Icon, Input } from 'semantic-ui-react'

import { RemoveLinkIcon } from './RemoveLinkIcon'
import { ActiveSwitch } from './ActiveSwitch'
import { PassthroughIcon } from './PassthroughIcon'
import { PriorityIcon } from './PriorityIcon'
import { editLinkThunk } from '../../../redux/links'

export const DashboardLink = ({ link }) => {
  const { url, name, passthrough, active, priority } = link
  const dispatch = useDispatch()

  const handleChange = (_e, { name, value }) => {
    dispatch(editLinkThunk(link.id, { ...link, [name]: value }))
  }

  const toggleAttribute = (attribute, value) => () => {
    dispatch(editLinkThunk(link.id, { ...link, [attribute]: value }))
  }

  return (
    <Item>
      <Item.Content>
        <Item.Header>
          <Input transparent name="name" value={name} onChange={handleChange} />
        </Item.Header>
        <Item.Meta>
          <Input
            fluid
            transparent
            size="small"
            name="url"
            value={url}
            onChange={handleChange}
          />
        </Item.Meta>
        <Item.Extra>
          <PassthroughIcon
            toggleAttribute={toggleAttribute}
            passthrough={passthrough}
          />
          <PriorityIcon toggleAttribute={toggleAttribute} priority={priority} />
          <RemoveLinkIcon linkId={link?.id} />
          <ActiveSwitch toggleAttribute={toggleAttribute} active={active} />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default DashboardLink
