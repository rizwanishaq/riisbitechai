const express = require("express");
const router = express.Router();

const { setDevice } = require("../controllers/deviceControler");

router.post("/", setDevice);

module.exports = router;
