import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
      console.log('entroa home');
  return (
      <Container>
      <Row className="mt-5">
        <Col xs={{span:'12'}} md={{span:6}} className='mb-5'>
             <h2>Bienvenid@ a Prueba tecnica</h2> 
             <p>¡Aquí podras Revisar el contenido de la prueba!</p>
             <p>Armando Rico Sandoval</p>
             <div>
                   <Link to='/login'>Ingresa</Link>                   
             </div>
        </Col>
        <Col>
        <img 
              className='img-fluid' 
              src="/img/task-manager.svg" 
              alt="Bienvenido" />
              <p>¡Gestiona tu tiempo,Mejora tu productividad!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
