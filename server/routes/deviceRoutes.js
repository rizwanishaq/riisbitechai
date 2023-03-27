import express from "express";
import { setDevice } from "../controllers/deviceControler.js";

const router = express.Router();

router.post("/", setDevice);

export default router;
