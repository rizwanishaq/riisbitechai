const asyncHandler = require("express-async-handler");
const { HfInference } = require("@huggingface/inference");

const hf = new HfInference(process.env.HUGGING_FACE_API);
// @desc    setDevice Information
// @route   POST /api/goals
// @access  Public
const stableDiffusion = asyncHandler(async (req, res) => {
  const { prompt } = req.body;

  const response = await hf.textToImage({
    inputs: prompt,
    negative_prompt: "blurry",
    model: "stabilityai/stable-diffusion-2",
  });
  console.log(response);
  res.status(200).json(response);
});

module.exports = {
  stableDiffusion,
};
