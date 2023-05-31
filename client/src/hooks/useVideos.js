import { useContext } from "react";
import { VideosContext } from "../contexts/VideosContext";

export const useVideos = () => {
  return useContext(VideosContext);
};
