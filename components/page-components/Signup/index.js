import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import {
  Header,
  Segment,
  Form,
  Button,
  Icon,
  Message,
  Input,
  Divider,
} from 'semantic-ui-react'

import { signupThunk } from '../../../redux/user'

const initialSignupFormData = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
}

export const Signup = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  // const { slug: accountSlug } = router.query

  const [loading, setLoading] = useState(false)
  const [signupFormData, setSignupFormData] = useState(initialSignupFormData)
  const [accountSlug, setAccountSlug] = useState(router?.query?.slug || '')

  const { email, password } = signupFormData

  const handleChange = (_event, { name, value }) => {
    const formatedValue = value.replaceAll('[^a-zA-Z0-9]+', '')
    setSignupFormData({
      ...signupFormData,
      [name]: formatedValue.toLowerCase(),
    })
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

  return (
    <>
      <Header as="h2" textAlign="center">
        Signup
      </Header>
      <Segment stacked>
        <Input
          style={{ marginBottom: '1em' }}
          onChange={(_e, { value }) => setAccountSlug(value)}
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
          <Button
            icon
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
      <Message>
        Already have an account?{' '}
        <Link href="/login">
          <a>Log in</a>
        </Link>
      </Message>
    </>
  )
}

export default Signup
