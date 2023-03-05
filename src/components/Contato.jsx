import React from 'react'
import { Col, Container, Stack, Row, Nav, Image } from 'react-bootstrap'
import { EnvelopeAt, Telephone, GeoAlt, Clock, Instagram, Whatsapp } from 'react-bootstrap-icons';
import logo from '../img/logo_nonsense.png'

const Contato = () => {
  return (
    <Container id='contato' fluid className='contato_container p-0'>
      <h2 className='contato_title'>Dúvidas? Entre em contato</h2>
      <Row className='contato_row'>
        <Col lg={5} className='contato_col_a'>
          <Stack className='contato_inner_container_a' gap={3}>
            <div className='contato_item'>
              <h3><EnvelopeAt style={{fontSize:"50px", marginRight:"25px"}}/></h3>
              <div>
                <h4>Email</h4>
                <a style={{textDecoration:"none", color:"black"}} href="mailto:nonsenseartesanal@gmail.com">nonsenseartesanal@gmail.com</a>
              </div>
            </div>

            <div className='contato_item'>
              <h3><Telephone style={{fontSize:"50px", marginRight:"25px"}}/></h3>
              <div>
                <h4>Telefone</h4>
                <a style={{textDecoration:"none", color:"black"}} href="tel:+55-1299191-0263">(12) 99191-0263</a>
              </div>
            </div>

            <div className='contato_item'>
              <h3><GeoAlt style={{fontSize:"50px", marginRight:"25px"}}/></h3>
              <div>
                <h4>Localização</h4>
                <a style={{textDecoration:"none", color:"black"}} href="https://goo.gl/maps/Uupfp2X6cVxP8P9d9">
                  Rua Caçapava, 308, Vila Nair. São José dos Campos - SP
                </a>
              </div>
            </div>

            <div className='contato_item'>
              <h3><Clock style={{fontSize:"50px", marginRight:"25px"}}/></h3>
              <div>
                <h4>Horário de atendimento</h4>
                <p>Segunda - Sexta, 8:00h às 17:00h</p>
              </div>
            </div>
          </Stack>
        </Col>

        <Col lg={5} className='contato_col_b'>
        <a style={{textDecoration:"none", color:"black"}} aria-label="Chat on WhatsApp" href="https://wa.me/12991910263">
          <h2 className='contato_orcamento'>Orçamento</h2>
        </a>
          <div>
            <Stack className='mt-3' direction="horizontal" gap={3}>
              <div>
                <a style={{textDecoration:"none", color:"black"}} href="https://www.instagram.com/nonsenseplanejados/">
                  <h3><Instagram/></h3>
                </a>
              </div>
              <div>
                <a style={{textDecoration:"none", color:"black"}} aria-label="Chat on WhatsApp" href="https://wa.me/12991910263">
                  <h3><Whatsapp/></h3>
                </a>
              </div>
              <div>
                <Nav.Link href="#home" style={{textDecoration:"none", color:"black"}}>
                  <h3>
                    <Image  style={{width:"32px",height:"32px"}} src={logo} alt="logo" />
                  </h3>
                </Nav.Link>
              </div>
            </Stack>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contato