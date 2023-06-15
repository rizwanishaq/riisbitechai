import express from "express";

import { getSadTalkerVideo } from "../controllers/sadTalkerController.js";

const router = express.Router();
router.post("/getVideo", getSadTalkerVideo);

export default router;
