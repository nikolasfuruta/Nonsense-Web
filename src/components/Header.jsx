import React from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo_nonsense.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='p-4'>
    <Container fluid>
          <Col xs={{span:12}} lg={{span:8}} className='header_col_a'>
            <Navbar.Brand href="#home">
              <img
                alt="Logo Nonsense Artesanal"
                src={ logo }
                width="100"
                height="100"
              />
            </Navbar.Brand>
            <h1 className='header_title'>NONSENSE ARTESANAL</h1>
          </Col>
          <Col className='header_col_b mt-4 mb-4'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link className="ms-xl-3" href="#about"><h3>Sobre</h3></Nav.Link>
                <Nav.Link className="ms-xl-3" href="#portfolio"><h3>Portfólio</h3></Nav.Link>
                <Nav.Link className="ms-xl-3" href="#contato"><h3>Contato</h3></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
    </Container>
    </Navbar>
  );
}

export default Header;