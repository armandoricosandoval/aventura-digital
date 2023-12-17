import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';

const Home = () => {
  const [login, setLogin] = useState(true);

  return (
    <Container>
      <Row className='my-auto'>
        <Col xs={{ span: '12' }} md={{ span: 6 }} className=''>
          <h2 className='mt-2'>Bienvenid@ a Prueba tecnica</h2>
          <p>¡Aquí podras Revisar el contenido de la prueba!</p>
          <p>Armando Rico Sandoval</p>
          <img
            className='img-fluid'
            src="/img/task-manager.svg"
            alt="Bienvenido" />
          <p>¡Gestiona tu tiempo,Mejora tu productividad!</p>
        </Col>
        <Col >
          {login ? <Login state={setLogin}/> : <Signup state={setLogin}/>}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
