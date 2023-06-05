import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAvatar } from "../../hooks/useAvatar";
import { Col, Alert, Card } from "react-bootstrap";
import PlaySound from "./PlaySound";

const RealTimeAvatar = () => {
  const { start, setStart, responseData, error } = useAvatar();
  const stopHandler = (e) => {
    setStart(false);
  };

  const startHandler = (e) => {
    setStart(true);
  };
  return (
    <Col>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={
              responseData.image
                ? `data:image/jpeg;base64,${responseData.image}`
                : "i/empty.png"
            }
          />
        </Card.Body>
        <Card.Body>
          {responseData.audio_contents && <PlaySound />}
          {error && <Alert variant="danger">{error}</Alert>}
          <Card.Link href="#" onClick={startHandler} disabled={start}>
            <i className="fas fa-play"></i>Start
          </Card.Link>
          <Card.Link href="#" onClick={stopHandler} disabled={!start}>
            <i className="fas fa-stop-circle"></i>Stop
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RealTimeAvatar;
