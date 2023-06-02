import express from "express";

import {
  getLanguages,
  getVoices,
  getSpeech,
} from "../controllers/ttsController.js";

const router = express.Router();
router.get("/languages", getLanguages);
router.get("/voices/:lang", getVoices);
router.post("/synthesis", getSpeech);

export default router;
