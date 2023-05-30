import asyncHandler from "express-async-handler";
import { listUrls } from "../utils/awsUtils.js";

export const getVideo = asyncHandler(async (req, res) => {});
export const videosUrl = asyncHandler(async (req, res) => {
  const urls = await listUrls();
  res.status(200).json({ urls: urls });
});

// module.exports = { getVideo, videosUrl };
export default "";
