import express from "express";

import { getAnswer } from "../controllers/chatController.js";

const router = express.Router();
router.post("/getanswer", getAnswer);

export default router;
