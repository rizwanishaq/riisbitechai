import asyncHandler from "express-async-handler";
import { listUrls } from "../utils/awsUtils.js";
import { generateAvatar } from "../services/mimicServices/mimicServices.js";
import path from "path";

import AWS from "aws-sdk";

import * as dotenv from "dotenv";
dotenv.config();
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const getAvatar = asyncHandler(async (req, res) => {
  const { audio_url, avatar, hd } = req.body;
  const response = await generateAvatar(audio_url, avatar, hd);
  res.status(200).json({ response });
});

export const videosUrl = asyncHandler(async (req, res) => {
  const urls = await listUrls();
  res.status(200).json({ urls: urls });
});

export const getAudio = asyncHandler(async (req, res) => {
  const { audio_url } = req.body;

  const params = {
    Bucket: "dialoga-machine-learning",
    Key: `mimic/audios/${path.basename(audio_url)}`,
  };

  const downloadStream = s3.getObject(params).createReadStream();

  downloadStream.on("error", (error) => {
    res.status(404).json({ error: error.message });
  });

  downloadStream.on("httpHeaders", (statusCode, headers, resp) => {
    res.set({
      "Content-Type": headers["content-type"],
    });
  });

  downloadStream.on("end", () => res.end());

  // Pipe download stream to response
  downloadStream.pipe(res);
});

export default "";
