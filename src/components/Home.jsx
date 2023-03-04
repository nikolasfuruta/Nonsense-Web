import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



const Home = () => {
  return (
    <Container fluid className='home_container p-0'>
      <Nav.Link>
        <p className='home_text'>Orçamento</p>
      </Nav.Link>
    </Container>
  )
}

export default Home;