import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useAvatar } from "../../hooks/useAvatar";

const DisplayVideo = () => {
  const { avatar, hd, audioUrl } = useAvatar();
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
    // eslint-disable-next-line
  }, [audioUrl]);

  return (
    <Card.Body>
      {processing ? (
        <img variant="top" src="i/processing.gif" alt="processing" />
      ) : (
        <video src={avatarVideo} controls className="mt-3"></video>
      )}
    </Card.Body>
  );
};

export default DisplayVideo;
