import React, { useEffect } from 'react'
import { createMedia } from '@artsy/fresnel'
import { useSelector, useDispatch } from 'react-redux'

import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

import { meThunk } from '../../../redux/user'
import { getAccountsThunk } from '../../../redux/accounts'
// import { getLinksThunk } from '../../../redux/links'

export const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

export const Navbar = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(meThunk())
    dispatch(getAccountsThunk())
    return
  }, [])

  return (
    <MediaContextProvider>
      <Media greaterThan="mobile">
        <DesktopNav>{props.children}</DesktopNav>
      </Media>
      <Media at="mobile">
        <MobileNav>{props.children}</MobileNav>
      </Media>
    </MediaContextProvider>
  )
}
