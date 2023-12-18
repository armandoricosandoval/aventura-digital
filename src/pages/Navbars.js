import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../firebase/contexts/AuthContext";

 const Navbars=()=> {
  const { logout } = useAuth();
  const { currentUser } = useAuth();

  const logoutSesion = () => {
    localStorage.clear();
    logout();
  };

 
  return (
    <>
      {currentUser && (
        <Navbar className="bg-body-tertiary" sticky="top" >
          <Container>
            <Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Brand>Armando Rico Photos</Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav>
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
              <div className="text-center" onClick={() => logoutSesion()}>SALIR</div>
            </Nav.Link>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default Navbars