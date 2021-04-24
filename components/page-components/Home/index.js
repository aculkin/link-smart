import { useState } from 'react'
import { Container, Header, Grid, Input, Icon } from 'semantic-ui-react'

import { API } from '../../../API'

export const Home = () => {
  const [slug, setSlug] = useState('')
  const [validSlug, setValidSlug] = useState(true)

  const onChange = async (_e, { value }) => {
    setSlug(value.toLowerCase())
    if (value) {
      const { data } = await API.accounts.checkSlug(value)
      if (data === 'slug is open') {
        setValidSlug(true)
      } else {
        setValidSlug(false)
      }
    }
  }
  return (
    <div
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        minHeight: 'calc(100vh - 35px)',
      }}
    >
      <Container>
        <Grid centered stackable>
          <Grid.Row>
            <Grid.Column width="10">
              <Header
                textAlign="center"
                as="h1"
                style={{
                  marginTop: '1em',
                  fontSize: '5em',
                  fontWeight: 'bold',
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '2px 2px 8px #000000',
                }}
              >
                Link Smart
                <Header.Subheader
                  style={{
                    marginTop: '1em',
                    marginBottom: '3em',
                    fontSize: '.4em',
                    fontWeight: 'bold',
                    color: 'white',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 8px #000000',
                  }}
                >
                  Next Generation One-Link Tool
                </Header.Subheader>
              </Header>
              <Input
                fluid
                onChange={onChange}
                value={slug}
                label="linksmart.app/"
                placeholder="Your name, business, product..."
                action={{
                  href: `/signup?slug=${slug}`,
                  color: 'green',
                  disabled: !validSlug,
                  content: validSlug ? 'Signup' : "That one's been taken!",
                }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default Home
