import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Header, Input } from 'semantic-ui-react'

import { editAccountThunk } from '../../../redux/accounts'

const initialSocialLinksState = {
  name: '',
  slug: '',
  facebookUrl: '',
  instagramUrl: '',
  youtubeUrl: '',
  linkedInUrl: '',
  tikTokUrl: '',
}

export const Settings = ({ selectedAccount }) => {
  const dispatch = useDispatch()
  const { displaySocial, displaySocialBottom } = selectedAccount
  const [socialLinks, setSocialLinks] = useState(initialSocialLinksState)

  const handleBooleanChange = (attribute, value) => () => {
    dispatch(
      editAccountThunk({
        accountId: selectedAccount?.id,
        accountDetails: {
          ...selectedAccount,
          [attribute]: value,
        },
      })
    )
  }

  const handleTextChange = (_e, { name, value }) => {
    setSocialLinks({ ...socialLinks, [name]: value })
  }

  const changeOnBlur = (fieldName) => () => {
    if (selectedAccount[fieldName] !== socialLinks[fieldName]) {
      dispatch(
        editAccountThunk({
          accountId: selectedAccount.id,
          accountDetails: {
            ...selectedAccount,
            [fieldName]: socialLinks[fieldName],
          },
        })
      )
    }
  }

  useEffect(
    () =>
      setSocialLinks({
        name: selectedAccount.name,
        slug: selectedAccount.slug,
        facebookUrl: selectedAccount.facebookUrl,
        instagramUrl: selectedAccount.instagramUrl,
        youtubeUrl: selectedAccount.youtubeUrl,
        tikTokUrl: selectedAccount.tikTokUrl,
        linkedInUrl: selectedAccount.linkedInUrl,
      }),
    [selectedAccount]
  )

  return (
    <>
      <Header>Main Account Details</Header>
      <Form>
        <Form.Input
          value={socialLinks.name || ''}
          onBlur={changeOnBlur('name')}
          onChange={handleTextChange}
          name="name"
          label="Account Name"
          placeholder="Your name"
        />
      </Form>
      <Header as="h5">Account slug</Header>
      <Input
        fluid
        name="slug"
        value={socialLinks.slug || ''}
        onBlur={changeOnBlur('slug')}
        onChange={handleTextChange}
        label="https://linksmart.app/"
        placeholder="Your slug"
      />
      <Header>Social Media Links</Header>
      <Form>
        <Form.Group>
          <Form.Checkbox
            toggle
            onChange={handleBooleanChange('displaySocial', !displaySocial)}
            checked={displaySocial}
            label="Display Social Icons"
          />
          <Form.Checkbox
            radio
            disabled={!displaySocial}
            checked={!displaySocialBottom}
            onChange={handleBooleanChange(
              'displaySocialBottom',
              !displaySocialBottom
            )}
            label="On Top?"
          />
          <Form.Checkbox
            radio
            disabled={!displaySocial}
            checked={displaySocialBottom}
            onChange={handleBooleanChange(
              'displaySocialBottom',
              !displaySocialBottom
            )}
            label="On Bottom?"
          />
        </Form.Group>
        <Form.Input
          value={socialLinks.facebookUrl || ''}
          onBlur={changeOnBlur('facebookUrl')}
          onChange={handleTextChange}
          name="facebookUrl"
          label="Facebook"
          placeholder="Facebook profile url"
        />
        <Form.Input
          value={socialLinks.instagramUrl || ''}
          onBlur={changeOnBlur('instagramUrl')}
          onChange={handleTextChange}
          name="instagramUrl"
          label="Instagram"
          placeholder="Instagram profile url"
        />
        <Form.Input
          value={socialLinks.youtubeUrl || ''}
          onBlur={changeOnBlur('youtubeUrl')}
          onChange={handleTextChange}
          name="youtubeUrl"
          label="Youtube"
          placeholder="Youtube channel url"
        />
        <Form.Input
          value={socialLinks.linkedInUrl || ''}
          onBlur={changeOnBlur('linkedInUrl')}
          onChange={handleTextChange}
          name="linkedInUrl"
          label="LinkedIn"
          placeholder="LinkedIn profile url"
        />
        <Form.Input
          value={socialLinks.tikTokUrl || ''}
          onBlur={changeOnBlur('tikTokUrl')}
          onChange={handleTextChange}
          name="tikTokUrl"
          label="Tik Tok"
          placeholder="Tik Tok profile url"
        />
      </Form>
    </>
  )
}

export default Settings
