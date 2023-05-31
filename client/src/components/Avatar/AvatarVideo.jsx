import React from "react";
import Card from "react-bootstrap/Card";
import { useVideos } from "../../hooks/useVideos";

const AvatarVideo = () => {
  const { avatar } = useVideos();
  return (
    <Card>
      <Card.Header>Video</Card.Header>
      <Card.Body>
        <video
          src={avatar}
          width="500"
          height="400"
          className="rounded mx-auto d-block mt-2 mb-1"
        />
      </Card.Body>
    </Card>
  );
};

export default AvatarVideo;
