import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/contexts/AuthContext";

const Navbars = () => {
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/perfil" className="nav-link">
                  Mi Perfil
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
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