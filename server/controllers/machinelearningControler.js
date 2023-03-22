const asyncHandler = require("express-async-handler");
const fs = require("fs");
const { HfInference } = require("@huggingface/inference");
const uploadFile = require("./../amazon-s3/s3Upload");

const hf = new HfInference(process.env.HUGGING_FACE_API);
// @desc    setDevice Information
// @route   POST /api/machinelearning/stable_diffusion
// @access  Public
const stableDiffusion = asyncHandler(async (req, res) => {
  const { prompt } = req.body;

  const image_blob = await hf.textToImage({
    inputs: prompt,
    negative_prompt: "blurry",
    model: "stabilityai/stable-diffusion-2",
  });

  console.log(image_blob);
  const arrayBuffer = await image_blob.arrayBuffer();
  const base64Data = Buffer.from(arrayBuffer).toString("base64");

  const url = await uploadFile(Buffer.from(arrayBuffer, "base64"));

  res.status(200).json({ image_base64: base64Data, url: url });
});

module.exports = {
  stableDiffusion,
};
