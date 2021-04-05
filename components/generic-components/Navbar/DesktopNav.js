import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import { LoginSignup } from './LoginSignup'
import { Logout } from './Logout'
import { navItems } from './navItems'
import { NavLink } from './NavLink'

export const DesktopNav = (props) => {
  const loggedIn = useSelector((state) => !!state?.user?.id)

  const { pathname } = useRouter()

  return (
    <>
      <Menu fixed="top">
        <Container>
          {navItems.map((navItem) => {
            return (
              <NavLink
                key={navItem?.name}
                navItem={navItem}
                pathname={pathname}
              />
            )
          })}
          <Menu.Menu position="right">
            <Menu.Item>{loggedIn ? <Logout /> : <LoginSignup />}</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      {props.children}
    </>
  )
}
