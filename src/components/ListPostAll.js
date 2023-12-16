import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../styles/styles.css';

import { Link } from 'react-router-dom';

const ListPostAll = () => {
      const [data, setData] = useState([])
    
      useEffect(() => {
            axios.get(process.env.REACT_APP_URL_ALL_POST, {
                  headers: {
                        'app-id': process.env.REACT_APP_KEY
                  }
            }).then(data => {
                  console.log(data.data)
                  setData(data.data)
            })
                  .catch(err => console.log(err));
      }, [])


      return (
            <Container>
                  <Row className='mt-4'>
                        {data?.data?.map((post) =>
                              <Col key={post.id} className='mt-4'>
                                    <div className="card-post">
                                          <img src={post.image} alt="postOne" />
                                          <div className="info" >
                                                <h2>{post.text}</h2>                                                
                                                <h3>{`${post.owner.firstName} ${post.owner.lastName}`}</h3>
                                                
                                                {post?.tags?.map((tag,i)=><Button key={i} variant="outline-warning">{tag}</Button>)}
                                                
                                                <Button
                                                      className="button-total mt-4"
                                                      as={Link}                                                      
                                                      to={`/item/${post.id}`}
                                                      variant="success">
                                                      Ver Mas
                                                </Button>
                                          </div>
                                    </div>
                              </Col>
                        )}
                  </Row>
            </Container>
      )
}

export default ListPostAll