import asyncHandler from "express-async-handler";
import { v4 as uuidv4 } from "uuid";
import { uploadAudio } from "../utils/awsUtils.js";
import fs from "fs";

import {
  listLanguages,
  listVoices,
  SynthesizeSpeech,
} from "../ttsServices/gRPCTTSServices.js";

export const getLanguages = asyncHandler(async (req, res) => {
  const response = await listLanguages();

  res.status(200).json(response);
});

export const getVoices = asyncHandler(async (req, res) => {
  const { lang } = req.params;

  const response = await listVoices(lang);

  res.status(200).json(response);
});

export const getSpeech = asyncHandler(async (req, res) => {
  const { language, voice, text } = req.body;

  const fileName = await SynthesizeSpeech({
    data: { language, voice, text },
    fileName: `./utils/ttsAudios/${uuidv4()}`,
  });

  const audio_url = await uploadAudio(`${fileName}.wav`);

  // fs.unlink(`${fileName}.wav`, (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(`${fileName}.wav - deleted`);
  // });
  res.status(200).json({ audio_url });
});

export default getLanguages;
