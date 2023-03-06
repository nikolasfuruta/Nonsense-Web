import React from 'react';
import { Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo_nonsense.png';
import { Instagram, Whatsapp } from 'react-bootstrap-icons';


const Header = () => {
  return (
    <Navbar id='home' collapseOnSelect expand="md" className='p-4 ps-5 pe-5'>
          <Col md className='header_col_a'>
            <Navbar.Brand href="#home">
              <img
                alt="Logo Nonsense Artesanal"
                src={ logo }
                width="100"
                height="100"
              />
            </Navbar.Brand>
            {/* <h1 className='header_title'>NONSENSE ARTESANAL</h1> */}
          </Col>
          <Col md className='header_col_b mt-4 mb-4'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className='header_nav' id="responsive-navbar-nav">
              <Nav className='header_nav'>
                <Nav.Link className="ms-xl-3 header_nav_item" href="#about"><h3>Sobre</h3></Nav.Link>
                <Nav.Link className="ms-xl-3 header_nav_item" href="#portfolio"><h3>Portfólio</h3></Nav.Link>
                <Nav.Link className="ms-xl-3 header_nav_item" href="#contato"><h3>Contato</h3></Nav.Link>
                <Nav.Link className="ms-xl-3 header_nav_item" href="https://www.instagram.com/nonsenseplanejados/"><h3><Instagram/></h3></Nav.Link>
                <Nav.Link className="ms-xl-3 header_nav_item" aria-label="Chat on WhatsApp" href="https://wa.me/12991910263"><h3><Whatsapp/></h3></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
    </Navbar>
  );
}

export default Header;