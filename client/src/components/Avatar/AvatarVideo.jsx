import React from "react";
import Card from "react-bootstrap/Card";

const AvatarVideo = () => {
  return (
    <Card>
      <Card.Header>Video</Card.Header>
      <Card.Body>
        <img
          src="assets/img/product-2.jpg"
          width="500"
          height="400"
          className="rounded mx-auto d-block mt-2 mb-1"
        />
      </Card.Body>
    </Card>
  );
};

export default AvatarVideo;
