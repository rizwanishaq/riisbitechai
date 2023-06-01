import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import RealTimeAvatar from "./RealTimeAvatar";
import DisplayResponse from "./DisplayResponse";
import { Container } from "react-bootstrap";

const AvatarSelection = () => {
  return (
    <>
      <Row>
        <RealTimeAvatar />
        <DisplayResponse />
      </Row>
    </>
  );
};

export default AvatarSelection;
