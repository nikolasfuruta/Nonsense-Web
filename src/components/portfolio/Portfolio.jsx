import React from 'react';
import { Carousel } from 'react-bootstrap';
import { items } from './items'

const Portfolio = () => {
  return (
    <>
      <h2 id='portfolio' className='potfolio_title mb-0'>Projetos</h2>

      <Carousel variant="dark" className='carousel_container'>
        { items.map(item => (
          <Carousel.Item interval={100000} className='carousel_item' key={item.id}>
            <img
              className="carousel_img"
              src={item.image}
              alt="Portfólio"
            />
        </Carousel.Item>)) 
        }
      </Carousel>
    </>
  );
}

export default Portfolio;

/*

        
<Carousel.Item interval={100000} className='carousel_item'>
          <img
            className="carousel_img"
            src={img02}
            alt="Portfólio"
          />
        </Carousel.Item> */