import express from "express";
import { getVideo, videosUrl } from "../controllers/mimicController.js";

const router = express.Router();

router.get("/", getVideo);
router.get("/videosurl", videosUrl);

export default router;
