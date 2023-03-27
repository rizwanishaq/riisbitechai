import express from "express";

import { getNews } from "../controllers/newsControler.js";

const router = express.Router();
router.get("/", getNews);

export default router;
