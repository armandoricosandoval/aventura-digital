import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col md={{span:6, offset: 3}} className="text-center">
            <img 
            style={{width:'100%'}}
            src={process.env.PUBLIC_URL +"/img/404-not-found.svg"}
            alt="error 404" />
            <h2>¿Entraste a una ruta invalida?</h2>
        <p> Vuelve al <Link to='/'>Inicio</Link></p>
        </Col>        
      </Row>
    </Container>
  );
};

export default NotFoundPage;
