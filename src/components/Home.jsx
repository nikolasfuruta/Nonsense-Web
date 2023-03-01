import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import home from '../img/home/SUITE MASTER 4.png'

const Home = () => {
  return (
    <Card className='home_container'>
      <Card.Img className='home_img rounded-0' src={ home } alt="Home image" />
      <Card.ImgOverlay>
        <Container>
          <div className="home_middle">
            <div className="home_text">
              <Nav.Link href="#contato">Orçamento</Nav.Link>
            </div>
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Home;