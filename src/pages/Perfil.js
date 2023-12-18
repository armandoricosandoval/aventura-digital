import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";

import ModalProfile from "../components/ModalProfile";
import MyCard from "../components/MyCard";
import "../css/perfil.css";
import { useAuth } from "../firebase/contexts/AuthContext";
import "../styles/styles.css";

const Perfil = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const login = localStorage.getItem("user");
  const { getImagesUser } = useAuth();

  const getDataUsers = useCallback(async () => {
    await getImagesUser().then((result) => {
      setData(result)
    }).catch((err) => {
      setError(err)
    });
  }, [getImagesUser])

  useEffect(() => {
    getDataUsers()
  }, [getDataUsers,show]);

  return (
    <Container>
      <Row className=" mt-5">
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="container-profile">
          <h1>Bienvenid@ {login}</h1>
          <img
            className="img-responsive float-right"
            src="https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU"
            alt="Photographer"
          />
          <p>
            Descubre un mundo lleno de momentos especiales por capturar y
            compartir. En esta plataforma interactiva, cada experiencia se
            convierte en un recuerdo que vale la pena compartir. Únete a
            nuestra comunidad, conecta con otros aventureros digitales y
            celebremos juntos cada momento. ¡Bienvenido a bordo para vivir y
            compartir esta emocionante experiencia!
          </p>
          <p>
            <Button onClick={() => setShow(true)}>Subir Foto &raquo;</Button>
          </p>
        </div>
      </Row>
      <div className="mt-5"></div>
      <Row>
        <h2 className="text-center">Mis Imagenes</h2>
        {data?.images?.length > 0 &&
          data?.images.map((item, index) => {
            return (
              <Col key={index} sm={4}>
                <MyCard photo={item} />
              </Col>
            );
          })}
      </Row>
      <ModalProfile show={show} setShow={setShow} />
    </Container>
  );
};

export default Perfil;
