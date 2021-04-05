import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'

import { logoutThunk } from '../../../redux/user'

export const Logout = ({ mobile }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = () => {
    setLoading(true)
    dispatch(logoutThunk({ router, setLoading }))
    console.log('logging out')
  }
  if (!!mobile) {
    return <Icon name="sign-out" onClick={handleSubmit} size="large" />
  } else {
    return (
      <Button loading={loading} secondary onClick={handleSubmit}>
        Logout
      </Button>
    )
  }
}

export default Logout
