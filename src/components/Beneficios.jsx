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
    <Container fluid className='beneficios_container mt-5'>
      <Row className='p-3'>
        <Col className='beneficios_col_a' xs={12} md={5}>
          <h2 data-aos-duration="3000" data-aos="fade-up" className='beneficios_title'>Por que escolher a Nonsense Artesanal</h2>
        </Col>
        <Col xs={12} md={7} className='beneficios_col_b'>
            <Stack className='' data-aos-duration="3000" data-aos="fade-down" gap={3}>
              <div className="beneficios_item"><Check /> Serviço personalizado</div>
              <div className="beneficios_item"><Check /> Projetos acompanhados por profissional de design de interiores</div>
              <div className="beneficios_item"><Check /> Mão de obra qualificada</div>
              <div className="beneficios_item"><Check /> Soluções criativas para problemas residenciais</div>
              <div className="beneficios_item"><Check /> Entregas em até 45 dias úteis após medição fina dos ambientes de projeto.</div>
              <div className="beneficios_item"><Check /> Garantia de 12 meses sobre as os móveis em MDF e Assistência Técnica</div>
            </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default Beneficios