import express from "express";
const router = express.Router();

import {
  stableDiffusion,
  get_pairs,
  getKeyWords,
} from "../controllers/machinelearningControler.js";

router.post("/stable_diffusion", stableDiffusion);
router.get("/stable_diffusion", get_pairs);
router.post("/keywordextractor", getKeyWords);

export default router;
