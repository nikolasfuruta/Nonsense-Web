import React from 'react'
import { Container, Nav, Image } from 'react-bootstrap'
import logo from '../img/logo_footer.png'

const Footer = () => {
  return (
    <Container fluid className='footer_container'>
      <div className='me-3'>
        <Nav.Link href="#home" style={{textDecoration:"none", color:"black"}}>
          <h3 className='footer_logo_circle'>
            <Image  style={{width:"5rem",height:"5rem"}} src={logo} alt="logo" />
          </h3>
        </Nav.Link>
      </div>
      <footer className='footer_copyright'>
        <small>&copy; O conteúdo disponibilizado nesse site tem seus direitos de uso reservados à Nonsense Artesanal.</small>
      </footer>
    </Container>
  )
}

export default Footer