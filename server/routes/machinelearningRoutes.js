const express = require("express");
const router = express.Router();

const { stableDiffusion } = require("../controllers/machinelearningControler");

router.post("/stable_diffusion", stableDiffusion);

module.exports = router;
