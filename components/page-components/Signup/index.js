import { useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Header, Segment, Form, Button, Icon, Message } from 'semantic-ui-react'

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

  const {
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
  } = signupFormData

  const handleChange = (_event, { name, value }) => {
    setSignupFormData({ ...signupFormData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)
    dispatch(signupThunk({ payload: signupFormData, router, setLoading }))
  }

  return (
    <>
      <Header as="h2" textAlign="center">
        Signup
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
          <Form.Group widths="equal">
            <Form.Input
              fluid
              required
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange}
            />
          </Form.Group>
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
            icon="lock"
            name="confirmPassword"
            iconPosition="left"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
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
            Signup
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
