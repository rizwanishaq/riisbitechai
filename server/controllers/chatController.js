import asyncHandler from "express-async-handler";
import { v4 as uuidv4 } from "uuid";
import { sendMessage } from "../services/chatServices/ChatService.js";

export const getAnswer = asyncHandler(async (req, res) => {
  const { text } = req.body;

  const response = await sendMessage({ text, uuid: uuidv4() });
  res.status(200).json(response.output_sentence);
});

export default getAnswer;
