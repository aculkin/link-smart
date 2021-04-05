import Link from 'next/link'
import { Menu } from 'semantic-ui-react'

export const NavLink = ({ navItem, pathname, closeMenu }) => {
  const { name, address } = navItem
  return (
    <Link href={address}>
      <Menu.Item active={pathname === address} as="a" onClick={closeMenu}>
        {name}
      </Menu.Item>
    </Link>
  )
}

export default NavLink
