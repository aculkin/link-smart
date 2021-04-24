import { Navbar } from '../components/generic-components/Navbar'
import { Footer } from '../components/generic-components/Footer'

export const NavbarLayout = (props) => {
  return (
    <Navbar>
      <div style={{ paddingTop: '49px' }}>
        {props.children}
        {/* <Footer /> */}
      </div>
    </Navbar>
  )
}

export default NavbarLayout
