import asyncHandler from "express-async-handler";
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

  const response = await SynthesizeSpeech({
    data: { language, voice, text },
    fileName: "test123",
  });

  res.status(200).json(response);
});

export default getLanguages;
