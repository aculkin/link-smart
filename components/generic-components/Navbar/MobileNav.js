import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

import { LoginSignup } from './LoginSignup'
import { Logout } from './Logout'
import { navItems } from './navItems'
import { NavLink } from './NavLink'

export const MobileNav = (props) => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const loggedIn = useSelector((state) => !!state?.user?.id)

  const { pathname } = useRouter()

  const closeMenu = () => setSidebarOpened(false)

  return (
    <>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={closeMenu}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" onClick={closeMenu}>
            <i>
              <Icon name="delete" />
              Close Menu
            </i>
          </Menu.Item>
          {navItems.map((navItem) => {
            return (
              <NavLink
                key={navItem?.name}
                navItem={navItem}
                pathname={pathname}
                closeMenu={closeMenu}
              />
            )
          })}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Menu fixed="top">
            <Menu.Item onClick={() => setSidebarOpened(!sidebarOpened)}>
              <Icon name="sidebar" size="large" />
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                {loggedIn ? <Logout mobile={true} /> : <LoginSignup />}
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          {props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  )
}

export default MobileNav
