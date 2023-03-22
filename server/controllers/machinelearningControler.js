const asyncHandler = require("express-async-handler");
const { HfInference } = require("@huggingface/inference");
const uploadFile = require("./../amazon-s3/s3Upload");
const promptImage = require("../models/stableDiffusionModel");

const hf = new HfInference(process.env.HUGGING_FACE_API);

// @desc    setDevice Information
// @route   POST /api/machinelearning/stable_diffusion
// @access  Public
const stableDiffusion = asyncHandler(async (req, res) => {
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
  });
});

// @desc    setDevice Information
// @route   GET /api/machinelearning/stable_diffusion
// @access  Public
const get_pairs = asyncHandler(async (req, res) => {
  const prompt_image_pairs = await promptImage.find({});
  console.log(prompt_image_pairs);

  res.status(200).json({
    prompt_image_pairs: prompt_image_pairs,
  });
});

module.exports = {
  get_pairs,
  stableDiffusion,
};
