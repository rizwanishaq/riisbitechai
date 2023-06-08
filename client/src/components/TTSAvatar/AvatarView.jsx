import React from "react";
import Card from "react-bootstrap/Card";

const AvatarView = ({ responseData }) => {
  return (
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
  );
};

export default AvatarView;
