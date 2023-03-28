import express from "express";
const router = express.Router();

import { chatGPT } from "../controllers/chatGPTController.js";

router.post("/", chatGPT);

export default router;
