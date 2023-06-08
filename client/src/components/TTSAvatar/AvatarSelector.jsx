import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
const AvatarSelector = ({ avatars, setAvatar, start, stopHandler }) => {
  return (
    <Card.Body className="mt-3">
      <Stack direction="horizontal" gap={3}>
        <Card.Link onClick={stopHandler} disabled={!start}>
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

export default AvatarSelector;
