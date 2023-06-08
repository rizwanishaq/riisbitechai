import asyncHandler from "express-async-handler";
import { HfInference } from "@huggingface/inference";
import uploadFile from "./../amazon-s3/s3Upload.js";
import promptImage from "../models/stableDiffusionModel.js";

const hf = new HfInference(process.env.HUGGING_FACE_API);

// @desc    setDevice Information
// @route   POST /api/machinelearning/stable_diffusion
// @access  Public
export const stableDiffusion = asyncHandler(async (req, res) => {
  const { prompt, device_uid } = req.body;

  const image_blob = await hf.textToImage({
    inputs: prompt,
    negative_prompt: "blurry",
    model: "stabilityai/stable-diffusion-2",
  });

  const arrayBuffer = await image_blob.arrayBuffer();
  const base64Data = Buffer.from(arrayBuffer).toString("base64");

  const image_url = await uploadFile(Buffer.from(arrayBuffer, "base64"));

  await promptImage.create({
    device_uid: device_uid,
    prompt: prompt,
    image_url: image_url,
  });

  res.status(200).json({
    image_base64: base64Data,
    // image_url: image_url,
  });
});

// @desc    setDevice Information
// @route   GET /api/machinelearning/stable_diffusion
// @access  Public
export const get_pairs = asyncHandler(async (req, res) => {
  const prompt_image_pairs = await promptImage.find({});
  console.log(prompt_image_pairs);

  res.status(200).json({
    prompt_image_pairs: prompt_image_pairs,
  });
});

export const getKeyWords = asyncHandler(async (req, res) => {
  const { text } = req.body;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt:
        "Extract keywords from this text. Make the first letter of each word uppercase and separate with commas \n\n" +
        text +
        "",
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.8,
      presence_penalty: 0.0,
    }),
  };

  const response = await fetch(
    "https://api.openai.com/v1/completions",
    options
  );

  const json = await response.json();

  const data = json.choices[0].text.trim();

  res.status(200).json({
    keywords: data,
  });
});

export default "";
