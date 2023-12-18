import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Carousels from "./Carousels";

const HexagonCard = ({ photo }) => {
  const [lgShow, setLgShow] = useState(false);
  const [images, setImages] = useState([]);

  const onModal = (image) => {
    setLgShow(true)
    setImages(image)
  }
  return (
    <div>
      <div className="grid">
        {photo.length > 0 &&
          photo.map((image, index) => (
            <div className="grid--item" key={index} onClick={() => onModal(image)}>
              <div
                className="img"
                style={{ backgroundImage: `url(${image.images[0]})` }}
              ></div>
              <div className='container-hexa'>
                <h2 className="subtitle-hexa">Click Me!</h2>
              </div>
            </div>
          ))}
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Aventure
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousels data={images} />
        </Modal.Body>
      </Modal>
    </div >
  );
};

export default HexagonCard;
