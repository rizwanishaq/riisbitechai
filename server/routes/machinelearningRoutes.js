const express = require("express");
const router = express.Router();

const {
  stableDiffusion,
  get_pairs,
} = require("../controllers/machinelearningControler");

router.post("/stable_diffusion", stableDiffusion);
router.get("/stable_diffusion", get_pairs);

module.exports = router;
