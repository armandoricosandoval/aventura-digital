import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const ListAll = (props) => {

  const login = localStorage.getItem("userinfo");
  console.log('login :', login);
  const [data, setData] = useState([]);
  console.log("data :", data);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL_ALL_USER, {
        headers: {
          "app-id": process.env.REACT_APP_KEY,
        },
      })
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row className="mt-4">
        <Col xs={12} className="text-center">
          <img
            src="/img/male_avatar.svg"
            alt="profile"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col className="mt-4">
          <Card style={{ maxWidth: "360px" }} className="mx-auto p-4">
            <p className="text-center">
              <b>Nombre: </b>
              {login.name}
            </p>
            <p className="text-center">
              <b>Correo: </b>
              {login.email}
            </p>
            <p className="text-center">
              <b>Tipo de Usuario: </b>
             
            </p>

            <Button as={Link} to="/perfilUsuario" variant="success">
              Ver Perfil Completo
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ListAll;
