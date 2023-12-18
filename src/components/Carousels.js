import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = ({ data }) => {
  return (
    <Carousel data-bs-theme="primary">
      {data?.images?.length > 0 && data?.images?.map((item, index) =>{
       return <Carousel.Item key={index} text="First slide">
          <img
            className="d-block w-100 objet-cover"
            src={item}
            alt={index}
            height={"500px"}
          />
        </Carousel.Item>
      })}
    </Carousel>
  )
}

export default Carousels
