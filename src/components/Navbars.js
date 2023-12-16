import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';


export default function Navbars() {
  const login=localStorage.getItem('user')
 

  return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">ARMANDO RICO</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/login">INICIAR SESION</Nav.Link>
      <Nav.Link href="/signup">REGISTRO</Nav.Link>      
      {login && <>
      <Nav.Link href="/ListPostAll">LISTA POST</Nav.Link>
      <Nav.Link href="/ListAll">LISTA USERS</Nav.Link>
      <Nav.Link href="/"><div onClick={()=>localStorage.clear()}>SALIR</div></Nav.Link>
      </>}      
    </Nav>
    </Container>
  </Navbar>
  );
}


