const express = require("express");
const router = express.Router();

const { getNews } = require("../controllers/newsControler");

router.get("/", getNews);

module.exports = router;
