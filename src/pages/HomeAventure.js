import React, { useCallback, useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import HexagonCard from "../components/HexagonCard";
import "../css/homeAventure.css";
import { useAuth } from "../firebase/contexts/AuthContext";
const HomeAnventure = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { getAllImages } = useAuth();

  const getDataAll = useCallback(async () => {
    try {
      const dataAll = await getAllImages();
      setData(dataAll);
    } catch (error) {
      setError(error);
    }
  }, [getAllImages]);

  useEffect(() => {
    getDataAll();
  }, [getDataAll]);
  return (
    <>
    {error && <Alert variant="danger">{error}</Alert>}
      <Row className="hero">
        <Col>
          <h1>Una Aventura Digital</h1>
        </Col>
      </Row>
      <div className="mt-2"></div>
      <Row>
        {data.length>0 && 
          <HexagonCard photo={data} />
        }
      </Row>
    </>
  );
};

export default HomeAnventure;
