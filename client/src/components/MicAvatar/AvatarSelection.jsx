import React from "react";
import { Card, Stack, Form, Alert } from "react-bootstrap";

const AvatarSelection = ({
  error,
  avatars,
  start,
  startHandler,
  stopHandler,
  setAvatar,
}) => {
  return (
    <Card.Body>
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
  );
};

export default AvatarSelection;
