import React from 'react'
import Link from 'next/link'

import { Button } from 'semantic-ui-react'

export const LoginSignup = () => {
  return (
    <>
      <Link href="/signup">
        <Button primary>Signup</Button>
      </Link>
      <div style={{ marginRight: '5px' }} />
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </>
  )
}

export default LoginSignup
