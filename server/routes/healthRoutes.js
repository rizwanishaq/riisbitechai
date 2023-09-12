import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json({ response: "200 OK" });
});

export default router;
