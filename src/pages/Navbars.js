import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../firebase/contexts/AuthContext";

export default function Navbars() {
  const { logout } = useAuth();
  const login = localStorage.getItem("user");

  const logoutSesion = () => {
    localStorage.clear();
    logout();
  };

  return (
    <>
      {
        login && (
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">ARMANDO RICO</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/ListPostAll">LISTA POST</Nav.Link>
                <Nav.Link href="/ListAll">LISTA USERS</Nav.Link>
                <Nav.Link href="/">
                  <div onClick={() => logoutSesion()}>SALIR</div>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        ) 
      }
    </>
  )
}
