import React from 'react';
import Card from 'react-bootstrap/Card';
import sobre_img from '../img/sobre/JANTAR 1.png'

const Sobre = () => {
  return (
    <Card border="light" className="sobre_container">
      <Card.Img className='sobre_img rounded-0' src={ sobre_img } alt="Sobre nós" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Sobre