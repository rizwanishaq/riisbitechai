import express from "express";
import { getAvatar, videosUrl } from "../controllers/mimicController.js";

const router = express.Router();

router.post("/getAvatar", getAvatar);
router.get("/videosurl", videosUrl);

export default router;
