import React from "react";
import { useAvatar } from "../../hooks/useAvatar";
import { Col, Alert, Card, Form } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import PlaySound from "./PlaySound";

const RealTimeAvatar = () => {
  const { start, setStart, responseData, error, avatars, setAvatar } =
    useAvatar();
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
            className="rounded-circle"
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
          <Stack direction="horizontal" gap={3}>
            <Card.Link href="#" onClick={startHandler} disabled={start}>
              <i className="fas fa-play"></i>Start
            </Card.Link>
            <Card.Link href="#" onClick={stopHandler} disabled={!start}>
              <i className="fas fa-stop-circle"></i>Stop
            </Card.Link>
            <Form.Group>
              <Form.Select onChange={(e) => setAvatar(e.target.value)}>
                {" "}
                <option value="">Select avatar</option>
                {avatars.map((avatar) => (
                  <option key={avatar} value={avatar}>
                    <>{avatar.split("/").pop().replace(".mp4", "")}</>
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RealTimeAvatar;
