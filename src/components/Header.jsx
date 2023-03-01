import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo_nonsense.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='mb-2'>
      <Container fluid className='pt-4 ps-md-5 '>
        <Row>
          <Col className='ps-md-5 me-lg-5'>
            <Navbar.Brand href="#home">
                <img
                      alt="Logo Nonsense Artesanal"
                      src={ logo }
                      width="100"
                      height="100"
                    />
                  <h1 className='d-inline align-middle ms-4'>NONSENSE ARTESANAL</h1>
            </Navbar.Brand>
          </Col>

          <Col className='mt-4 mb-4 ms-lg-5 ps-lg-5'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mt-2 pt-auto">
                <Nav.Link href="#sobre"><h3>Sobre</h3></Nav.Link>
                <Nav.Link href="#portfolio"><h3>Portfólio</h3></Nav.Link>
                <Nav.Link href="#contato"><h3>Contato</h3></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;