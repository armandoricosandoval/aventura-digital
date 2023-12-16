import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";


const ConsultItem = () => {

      const location = useLocation();
      const id = location?.pathname?.split("/");
      const [data, setData] = useState([])


      useEffect(() => {
            axios.get(`https://dummyapi.io/data/v1/post/${id[2]}/comment?limit=10`, {
                  headers: {
                        'app-id': process.env.REACT_APP_KEY
                  }
            }).then(data => {
                  setData(data.data)
            })
                  .catch(err => console.log(err));
      }, [])


      return <Container>
            <Row className='mt-4'>
                  {data?.data?.length > 0 ? <>
                        {data?.data?.map((user, i) => (
                              <>
                                    <Col key={i} xs={3} className='text-center mt-4'>
                                          <img
                                                src={user.owner.picture}
                                                alt="profile"
                                                style={{
                                                      width: '150px',
                                                      height: '150px',
                                                      borderRadius: '50%',
                                                      objectFit: 'cover'
                                                }}
                                          />
                                    </Col>
                                    <Col key={user.id} xs={6} className='mt-4'>
                                          <Card style={{ maxWidth: '360px' }} className='mx-auto p-4'>
                                                <h3><b>Mensaje:</b> {user.message}</h3>
                                                <p className='text-center'><b>Nombre: </b>{`${user.owner.firstName} ${user.owner.lastName}`}</p>
                                                <p className='text-center'><b>Titulo: </b>{user.owner.title}</p>
                                                <Button
                                                      as={Link}
                                                      to={`/user/${user.id}`}
                                                      variant="success">
                                                      Ver Perfil Completo
                                                </Button>
                                          </Card>
                                    </Col>
                              </>
                        ))}</> :
                        <Col className='mt-4'>
                              <h1>No hay Comentarios</h1>
                              <Button
                                    as={Link}
                                    to={`/ListPostAll`}
                                    variant="success">
                                    Regresar ...
                              </Button>
                        </Col>

                  }

            </Row>
      </Container>;
};

export default ConsultItem;
