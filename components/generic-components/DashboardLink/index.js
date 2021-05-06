import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Item, Input } from 'semantic-ui-react'

import { RemoveLinkIcon } from './RemoveLinkIcon'
import { ActiveSwitch } from './ActiveSwitch'
import { PassthroughIcon } from './PassthroughIcon'
import { PriorityIcon } from './PriorityIcon'
import { LinkAnalyticsLabel } from '../LinkAnalyticsLabel'
import { editLinkThunk } from '../../../redux/links'

export const DashboardLink = ({ link }) => {
  const { url, name, passthrough, active, priority } = link
  const [linkTextFields, setLinkTextFields] = useState({
    name,
    url,
  })

  const dispatch = useDispatch()

  const handleTextChange = (_e, { name, value }) => {
    setLinkTextFields({ ...linkTextFields, [name]: value })
  }

  const toggleAttribute = (attribute, value) => () => {
    dispatch(editLinkThunk(link.id, { ...link, [attribute]: value }))
  }

  const onBlur = (fieldName) => () => {
    if (linkTextFields[fieldName] !== link[fieldName]) {
      dispatch(
        editLinkThunk(link.id, {
          ...link,
          [fieldName]: linkTextFields[fieldName],
        })
      )
    }
  }

  useEffect(() => {
    setLinkTextFields({ name, url })
  }, [link])

  return (
    <Item>
      <Item.Content>
        <Item.Header>
          <Input
            onBlur={onBlur('name')}
            placeholder="Display name..."
            transparent
            name="name"
            value={linkTextFields?.name || ''}
            onChange={handleTextChange}
          />
        </Item.Header>
        <Item.Meta>
          <Input
            fluid
            onBlur={onBlur('url')}
            placeholder="Url..."
            transparent
            size="small"
            name="url"
            value={linkTextFields?.url || ''}
            onChange={handleTextChange}
          />
        </Item.Meta>
        <Item.Description>
          <ActiveSwitch toggleAttribute={toggleAttribute} active={active} />
        </Item.Description>
        <Item.Extra>
          <LinkAnalyticsLabel link={link} />
          <PassthroughIcon
            toggleAttribute={toggleAttribute}
            passthrough={passthrough}
          />
          <PriorityIcon toggleAttribute={toggleAttribute} priority={priority} />
          <RemoveLinkIcon linkId={link?.id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default DashboardLink
