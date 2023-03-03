import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
	return (
    <Container fluid id='about'>
      <Row className='about_row'>
        <Col className='about_col'>
          <p className='about_text'>Imagine ter uma marcenaria que une tradição e inovação para oferecer
                soluções únicas e diferenciadas. Essa é a Nonsense
                Artesanal, um sonho que se tornou realidade há quatro anos, em 2018,
                com a visão de Luiz Carlos F. da Silva, um apaixonado pela arte da
                marcenaria tradicional. Mas a história não para por aí. Em 2019, a
                marcenaria ganhou ainda mais força com a chegada de Sabrina
                Domiciano, uma renomada designer de interiores com premiação
                nacional. Foi a partir desse momento que a Nonsense Artesanal passou
                a combinar o que há de melhor nos dois mundos, tradição e
                contemporaneidade, respirando novos ares e oferecendo soluções ainda
                mais incríveis. Juntando o melhor dos dois mundos, a Nonsense
                Artesanal tem como missão construir um conceito único e diferente de
                produtos e serviços convencionais existentes. Com um olhar apurado
                para o design, funcionalidade, durabilidade, acessibilidade e
                sustentabilidade, a marcenaria trabalha sempre com o objetivo de
                respeitar o cliente e, acima de tudo, o lar do cliente. Faça parte
                dessa história e tenha a sua casa transformada com as soluções
                exclusivas da Nonsense Artesanal.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
