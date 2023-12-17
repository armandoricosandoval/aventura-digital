import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import axios from "axios";
import MyCard from "../components/MyCard";
import "../css/perfil.css";
import "../styles/styles.css";

const Perfil = () => {
  const [data, setData] = useState([]);
  const login = localStorage.getItem("user");
 

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=10")
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row className=" mt-5">
        <div className="container-profile">
          <h1>Bienvenid@ {login}</h1>
          <img
            className="img-responsive float-right"
            src="/img/project-default.svg"
            alt="Photographer"
          />
          <p>
            Build responsive, mobile-first projects on the web with the world's
            most popular front-end component library. Bootstrap is an open
            source toolkit for developing with HTML, CSS, and JS. Quickly
            prototype your ideas or build your entire app with our Sass
            variables and mixins, responsive grid system, extensive prebuilt
            components, and powerful plugins built on jQuery.
          </p>
          <p>
            <Button>Subir Foto &raquo;</Button>
          </p>
        </div>
      </Row>
      <div className="mt-5"></div>
      <Row>
        <h2 className="text-center">Mis Imagenes</h2>
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <Col key={index} sm={4}>
                <MyCard photo={item} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Perfil;
