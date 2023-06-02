import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
export const VideosContext = createContext();

const VideosContextProvider = ({ children }) => {
  const [audioUrl, setAudioUrl] = useState("");
  const [avatar, setAvatar] = useState(
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_another.mp4"
  );
  const { isLoading, error, data } = useQuery("videosdata", async () => {
    const response = await fetch("http://localhost:5000/api/mimic/videosurl");
    const responseData = await response.json();

    return responseData.urls;
  });
  return (
    <VideosContext.Provider
      value={{ data, avatar, setAvatar, audioUrl, setAudioUrl }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export default VideosContextProvider;
