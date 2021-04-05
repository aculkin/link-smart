import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Item, Icon, Input } from 'semantic-ui-react'

import { RemoveLinkIcon } from './RemoveLinkIcon'
import { editLinkThunk } from '../../../redux/links'

export const DashboardLink = ({ link }) => {
  const dispatch = useDispatch()
  const [savedLink, setSavedLink] = useState(link)
  const { name, url } = savedLink

  const [editing, setEditing] = useState(null)

  const handleChange = (_e, { name, value }) => {
    setSavedLink({ ...savedLink, [name]: value })
  }

  const submitChange = () => {
    const urlChanged = link.url !== url
    const nameChanged = link.name !== name

    if (link?.id && (urlChanged || nameChanged)) {
      dispatch(editLinkThunk(link?.id, { ...link, name, url }))
    }
  }

  useEffect(() => {
    setSavedLink(link)
  }, [link])

  useEffect(submitChange, [editing])

  return (
    <Item>
      <Item.Content>
        <Item.Header>
          {editing === 'name' ? (
            <>
              <Input
                transparent
                name="name"
                value={name}
                onChange={handleChange}
                size="small"
              />
              <Icon link name="check" id="name" onClick={() => setEditing()} />
            </>
          ) : (
            <>
              {name ? (
                name
              ) : (
                <i style={{ color: '#c7c7c7' }}>give this link a name</i>
              )}{' '}
              <Icon
                link
                name="edit"
                id="name"
                size="small"
                onClick={() => setEditing('name')}
              />
            </>
          )}
        </Item.Header>
        <Item.Meta>
          {editing === 'url' ? (
            <>
              <Input
                transparent
                name="url"
                value={url}
                onChange={handleChange}
                size="mini"
              />
              <Icon link name="check" id="url" onClick={() => setEditing()} />
            </>
          ) : (
            <>
              {url ? (
                url
              ) : (
                <i style={{ color: '#c7c7c7' }}>where will this link go?</i>
              )}{' '}
              <Icon
                link
                name="edit"
                id="url"
                size="small"
                onClick={() => setEditing('url')}
              />
            </>
          )}
        </Item.Meta>
        <Item.Extra>
          <RemoveLinkIcon linkId={link?.id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default DashboardLink
