import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = ({photo}) => {
  return (    
      <Card className='mycard'>
        <Card.Img
          variant="top"
          src={photo}
          alt={photo}
          className="mycard-image"
        />
      </Card>
   
  );
};

export default MyCard;