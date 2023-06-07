import React from "react";

import { Card, Col, Alert, Stack, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsFillSendFill } from "react-icons/bs";

const AvatarDisplay = ({
  responseData,
  error,
  start,
  stopHandler,
  avatars,
  setAvatar,
  handleSubmit,
  setText,
  text,
}) => {
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
          <Form className="align-items-center mt-3" onSubmit={handleSubmit}>
            <Form.Group className="mt-3 mb-3">
              <Form.Label>Text content</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                placeholder="Please enter text content"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                className="mt-3 mb-3"
                type="submit"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <BsFillSendFill size={20} />
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Stack direction="horizontal" gap={3}>
            {/* <Card.Link href="#" onClick={startHandler} disabled={start}>
              <i className="fas fa-play"></i>Start
            </Card.Link> */}
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

export default AvatarDisplay;
