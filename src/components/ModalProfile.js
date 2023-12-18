
import React, { useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuth } from '../firebase/contexts/AuthContext';


const ModalProfile = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const fileRef = useRef();
  const { currentUser,updateFileApp,saveImageFirestore } = useAuth();  

  async function handleSubmit(e) {
    e.preventDefault();
  
    const file = fileRef.current.files[0];
    if (!file) return;
  
    try {
      if (currentUser) {
        const uploadedFile = await updateFileApp(file);
  
        if (uploadedFile) {
          await saveImageToFirestore(uploadedFile);
          setShow(false);
        }
      }
    } catch (error) {
      console.error('Error al subir el archivo o guardar la URL en Firestore:', error);
    }
  }
  
  async function saveImageToFirestore(file) {
    try {
      const res = await saveImageFirestore(file);
      return res;
    } catch (error) {
      console.error('Error al guardar la URL de imagen en Firestore:', error);
      throw error;
    }
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Sube tu Foto!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>File</Form.Label>
              <Form.Control
                ref={fileRef}
                type="file"
                name="fileupdate"
                placeholder="png, jpg"
                autoFocus
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Save File
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalProfile;
