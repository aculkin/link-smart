import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Header, Segment, Form, Button, Icon, Message } from 'semantic-ui-react'

import { loginThunk } from '../../../redux/user'

const initialFormData = {
  email: '',
  password: '',
}

export const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [loginFormData, setLoginFormData] = useState(initialFormData)
  const { email, password } = loginFormData

  const handleChange = (_event, { name, value }) => {
    setLoginFormData({ ...loginFormData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)
    dispatch(loginThunk({ payload: loginFormData, setLoading, router }))
  }

  return (
    <>
      <Header as="h2" textAlign="center">
        Login
      </Header>
      <Segment stacked>
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
            labelPosition="left"
            loading={loading}
            primary
            fluid
            size="large"
            onClick={handleSubmit}
          >
            <Icon name="key" />
            Login
          </Button>
        </Form>
        {/* <Divider horizontal>Or</Divider>
        <Button
          icon
          labelPosition="left"
          color="google plus"
          fluid
          href="/auth/google"
        >
          <Icon name="google" />
          Login with Google
        </Button> */}
      </Segment>
      <Message>
        New to us?{' '}
        <Link href="/signup">
          <a>Click here to sign up</a>
        </Link>
      </Message>
      {/* <Message>
        Forgot your password?{' '}
        <Link href="/forgot-password">
          <a>Click here to reset it</a>
        </Link>
      </Message> */}
    </>
  )
}

export default Login
