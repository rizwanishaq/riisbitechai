import { createContext, useState } from "react";
export const VideosContext = createContext();

const VideosContextProvider = ({ children }) => {
  const [audioUrl, setAudioUrl] = useState("");
  const [avatar, setAvatar] = useState(
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_another.mp4"
  );
  const [hd, setHd] = useState(false);

  return (
    <VideosContext.Provider
      value={{ avatar, setAvatar, audioUrl, setAudioUrl, hd, setHd }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export default VideosContextProvider;
