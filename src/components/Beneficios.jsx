import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Check } from 'react-bootstrap-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Beneficios = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container fluid className='beneficios_container p-5'>
      <Row className='p-3'>
        <Col className='beneficios_col_a' xs={12} md={6}>
          <h2  data-aos-duration="2000" data-aos="fade-right" className='beneficios_title'>Nossos Benefícios</h2>
        </Col>
        <Col xs={12} md={6}>
          <Container>
            <Stack data-aos-duration="2000" data-aos="fade-left" gap={3}>
              <div className="beneficios_item"><Check /> Serviço personalizado</div>
              <div className="beneficios_item"><Check /> Projetos acompanhados por profissional de design de interiores</div>
              <div className="beneficios_item"><Check /> Mão de obra qualificada</div>
              <div className="beneficios_item"><Check /> Soluções criativas para problemas residenciais</div>
            </Stack>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Beneficios