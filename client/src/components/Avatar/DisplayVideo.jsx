import React, { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useVideos } from "../../hooks/useVideos";

const DisplayVideo = () => {
  const { avatar, hd } = useVideos();
  const { audioUrl } = useVideos();
  const [avatarVideo, setAvatarVideo] = useState("");
  const [processing, setProcesssing] = useState(false);

  useEffect(() => {
    const getVideo = async () => {
      setProcesssing(true);
      const response = await fetch("/api/mimic/getAvatar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audio_url: audioUrl,
          avatar: avatar,
          hd: hd,
        }),
      });

      const responseData = await response.json();
      setAvatarVideo(responseData.response.video_url);
      setProcesssing(false);
    };
    if (audioUrl !== "") {
      getVideo();
    }
  }, [audioUrl]);

  return (
    <Card.Body>
      {processing ? (
        <img variant="top" src="i/processing.gif" />
      ) : (
        <video src={avatarVideo} controls className="mt-3"></video>
      )}
    </Card.Body>
  );
};

export default DisplayVideo;
