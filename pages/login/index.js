import { AuthLayout, NavbarLayout } from '../../layouts'
import { Login } from '../../components/page-components/Login'

export const LoginPage = () => {
  return (
    <NavbarLayout>
      <AuthLayout>
        <Login />
      </AuthLayout>
    </NavbarLayout>
  )
}

export default LoginPage
