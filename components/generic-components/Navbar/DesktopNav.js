import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import { LoginSignup } from './LoginSignup'
import { Logout } from './Logout'
import { NavLink } from './NavLink'
import { loggedInNavItems, notLoggedInNavItems } from './navItems'

export const DesktopNav = (props) => {
  const loggedIn = useSelector((state) => !!state?.user?.id)

  const { pathname } = useRouter()

  const navItems = loggedIn ? loggedInNavItems : notLoggedInNavItems

  return (
    <div>
      <Menu fixed="top" style={{ height: '49' }}>
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
    </div>
  )
}
