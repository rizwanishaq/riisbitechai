import asyncHandler from "express-async-handler";

import { getVideoURL } from "../services/sadTalkerService/sadTalkerService.js";

export const getSadTalkerVideo = asyncHandler(async (req, res) => {
  const { audio_url, image } = req.body;

  const response = await getVideoURL({ audio_url, image });
  res.status(200).json(response.video_url);
});

export default getSadTalkerVideo;
