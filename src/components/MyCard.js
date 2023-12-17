import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = ({photo}) => {
  return (    
      <Card className='mycard'>
        <Card.Img
          variant="top"
          src={photo.download_url}
          alt={photo.author}
          className="img-thumbnail img-responsive"
        />
      </Card>
   
  );
};

export default MyCard;