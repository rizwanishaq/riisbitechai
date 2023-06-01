import React from "react";
import { Col, Alert } from "react-bootstrap";
import PlaySound from "./PlaySound";
import { useAvatar } from "../../hooks/useAvatar";

const DisplayResponse = () => {
  const { responseData, error } = useAvatar();
  return (
    <Col>
      {responseData.image && (
        <img
          src={`data:image/jpeg;base64,${responseData.image}`}
          alt="response_Image"
        />
      )}
      {responseData.audio_contents && <PlaySound />}
      {error && <Alert variant="danger">{error}</Alert>}
    </Col>
  );
};

export default DisplayResponse;
