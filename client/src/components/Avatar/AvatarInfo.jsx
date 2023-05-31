import React from "react";
import { useVideos } from "../../hooks/useVideos";
const AvatarInfo = ({ video_url }) => {
  const { setAvatar } = useVideos();
  return (
    <video
      width="15%"
      height="auto"
      className="img-thumbnail"
      onClick={() => setAvatar(video_url)}
    >
      <source src={video_url} type="video/mp4" />
    </video>
  );
};

export default AvatarInfo;
