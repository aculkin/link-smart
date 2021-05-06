import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import {
  Header,
  Segment,
  Form,
  Button,
  Icon,
  Message,
  Input,
  Container,
} from 'semantic-ui-react'

import { format } from '../../../utility/front-end'
import { signupThunk } from '../../../redux/user'

const initialSignupFormData = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
}

export const Signup = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [signupFormData, setSignupFormData] = useState(initialSignupFormData)
  const [accountSlug, setAccountSlug] = useState(router?.query?.slug || '')

  const { email, password, confirmPassword } = signupFormData

  const handleSlugChange = (_event, { value }) => {
    const formatedSlug = format.slug(value)
    setAccountSlug(formatedSlug)
  }

  const handleChange = (_event, { name, value }) => {
    if (name === 'email') {
      setSignupFormData({
        ...signupFormData,
        [name]: format.noSpaces(value),
      })
    } else {
      setSignupFormData({
        ...signupFormData,
        [name]: value,
      })
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    dispatch(
      signupThunk({
        payload: { ...signupFormData, accountSlug },
        router,
        setLoading,
      })
    )
  }

  useEffect(() => setAccountSlug(router?.query?.slug), [router?.query?.slug])
  const signupReady =
    accountSlug?.length > 0 && email?.length > 5 && confirmPassword === password
  return (
    <Container>
      <Header as="h2" textAlign="center">
        Signup
      </Header>
      <Segment stacked>
        <Input
          name="slug"
          style={{ marginBottom: '1em' }}
          onChange={handleSlugChange}
          value={accountSlug}
          fluid
          label="linksmart.app/"
          placeholder="Your name, business, product..."
        />
        <Form>
          <Form.Input
            fluid
            name="email"
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
            value={email}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            icon="lock"
            name="password"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            icon={
              confirmPassword && confirmPassword === password ? 'check' : null
            }
            name="confirmPassword"
            iconPosition="left"
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
          />
          <Button
            icon
            disabled={!signupReady}
            labelPosition="right"
            loading={loading}
            primary
            fluid
            size="large"
            onClick={handleSubmit}
          >
            Signup
            <Icon name="right arrow" />
          </Button>
        </Form>
      </Segment>
      <Message info>
        Already have an account?{' '}
        <Link href="/login">
          <a>
            <u>Log in</u>
          </a>
        </Link>
      </Message>
    </Container>
  )
}

export default Signup
