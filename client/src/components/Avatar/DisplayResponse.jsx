import React, { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useVideos } from "../../hooks/useVideos";

const DisplayResponse = () => {
  const { avatar } = useVideos();
  const { audioUrl } = useVideos();
  const [avatarVideo, setAvatarVideo] = useState("");
  const [processing, setProcesssing] = useState(false);

  useEffect(() => {
    const getVideo = async () => {
      setProcesssing(true);
      const response = await fetch(
        "http://localhost:5000/api/mimic/getAvatar",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            audio_url: audioUrl,
            avatar: avatar,
          }),
        }
      );

      const responseData = await response.json();
      setAvatarVideo(responseData.response.video_url);
      setProcesssing(false);
    };
    if (audioUrl !== "") {
      getVideo();
    }
  }, [audioUrl]);

  return (
    <Col>
      <Card style={{ width: "25rem" }}>
        {processing ? (
          <img variant="top" src="i/processing.gif" />
        ) : (
          <video src={avatarVideo} controls></video>
        )}
      </Card>
    </Col>
  );
};

export default DisplayResponse;
