import { Navbar } from '../components/generic-components/Navbar'
import { Footer } from '../components/generic-components/Footer'

export const NavbarLayout = (props) => {
  return (
    <Navbar>
      <div style={{ marginTop: '49px', height: '70vh' }}>
        {props.children}
        <Footer />
      </div>
    </Navbar>
  )
}

export default NavbarLayout
