import asyncHandler from "express-async-handler";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

// @desc    setDevice Information
// @route   POST /api/chatgpt
// @access  Public
export const chatGPT = asyncHandler(async (req, res) => {
  const { messages } = JSON.parse(req.body.messages);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });
  const completion_texts = response.data.choices[0].message.content;
  console.log(completion_texts);

  res.status(200).json({ completion_texts: completion_texts });
});
