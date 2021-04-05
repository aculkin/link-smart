import { AuthLayout, NavbarLayout } from '../../layouts'
import { Signup } from '../../components/page-components/Signup'

export const SignupPage = () => {
  return (
    <NavbarLayout>
      <AuthLayout>
        <Signup />
      </AuthLayout>
    </NavbarLayout>
  )
}

export default SignupPage
