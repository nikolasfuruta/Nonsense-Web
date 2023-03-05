import React from 'react';
import Container from 'react-bootstrap/Container';



const Home = () => {
  return (
    <Container fluid className='home_container p-0'>
      <a style={{textDecoration:"none", color:"black"}} aria-label="Chat on WhatsApp" href="https://wa.me/12991910263">
          <h2 className='home_text'>Orçamento</h2>
      </a>
    </Container>
  )
}

export default Home;