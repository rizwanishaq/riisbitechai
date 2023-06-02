import React, { useEffect, useState } from "react";
import { Col, Alert } from "react-bootstrap";
import PlaySound from "./PlaySound";
import { useAvatar } from "../../hooks/useAvatar";
import { useVideos } from "../../hooks/useVideos";

const DisplayResponse = () => {
  const { responseData, error } = useAvatar();
  const { avatar } = useVideos();
  const { audioUrl } = useVideos();
  const [avatarVideo, setAvatarVideo] = useState("");

  useEffect(() => {
    const getVideo = async () => {
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
    };
    if (audioUrl !== "") {
      getVideo();
    }
  }, [audioUrl]);

  return (
    <>
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
      <Col>
        <video src={avatarVideo} controls></video>
      </Col>
    </>
  );
};

export default DisplayResponse;
