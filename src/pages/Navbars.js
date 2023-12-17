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
      {login && (
        <Navbar bg="primary" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Brand>Armando Rico Photos</Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav pullRight>
                <Nav.Link href="/home" className="text-center" active>
                  Home
                </Nav.Link>
                <Nav.Link href="/perfil" className="text-center">
                  Mi Perfil
                </Nav.Link>
                <Nav.Link href="/contact" className="text-center">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav.Link href="/">
              <div onClick={() => logoutSesion()}>SALIR</div>
            </Nav.Link>
          </Container>
        </Navbar>
      )}
    </>
  );
}
