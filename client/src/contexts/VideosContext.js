import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
export const VideosContext = createContext();

const VideosContextProvider = ({ children }) => {
  const [avatar, setAvatar] = useState("");
  const { isLoading, error, data } = useQuery("videosdata", async () => {
    const response = await fetch("http://localhost:5000/api/mimic/videosurl");
    const responseData = await response.json();

    return responseData.urls;
  });
  return (
    <VideosContext.Provider value={{ data, avatar, setAvatar }}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideosContextProvider;
