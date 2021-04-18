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
    <div>
      <Container>
        <Grid>
          <Grid.Row columns="2">
            <Grid.Column>
              <Header as="h1" style={{ marginTop: '4em' }}>
                Link Smart
              </Header>
              <p style={{ marginBottom: '4em' }}>
                Next generation one-link tool
              </p>
              <Input
                onChange={onChange}
                value={slug}
                fluid
                label="linksmart.app/"
                placeholder="Your name, business, product..."
                action={{
                  href: `/signup?slug=${slug}`,
                  color: 'green',
                  disabled: !validSlug,
                  content: validSlug
                    ? 'Signup for free'
                    : "That one's been taken!",
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
