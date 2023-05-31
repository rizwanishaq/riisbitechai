import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import AvatarVideo from "./AvatarVideo";
import AvatarVideosList from "./AvatarVideosList";

const AvatarSelection = () => {
  return (
    <>
      <Row>
        <AvatarVideo />
      </Row>
      <Row>
        <AvatarVideosList />
      </Row>
    </>
  );
};

export default AvatarSelection;
