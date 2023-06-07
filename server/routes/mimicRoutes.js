import express from "express";
import {
  getAvatar,
  videosUrl,
  getAudio,
} from "../controllers/mimicController.js";

const router = express.Router();

router.post("/getAvatar", getAvatar);
router.get("/videosurl", videosUrl);
router.post("/audio", getAudio);

export default router;
