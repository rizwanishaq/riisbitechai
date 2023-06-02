import asyncHandler from "express-async-handler";
import { listUrls } from "../utils/awsUtils.js";
import { generateAvatar } from "../mimicServices/mimicServices.js";

export const getAvatar = asyncHandler(async (req, res) => {
  const { audio_url, avatar } = req.body;
  console.log(audio_url, avatar);
  const response = await generateAvatar(audio_url, avatar);
  console.log(response);

  res.status(200).json({ response });
});

export const videosUrl = asyncHandler(async (req, res) => {
  const urls = await listUrls();
  res.status(200).json({ urls: urls });
});

export default "";
