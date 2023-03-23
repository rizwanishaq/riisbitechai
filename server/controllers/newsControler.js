const asyncHandler = require("express-async-handler");
const NewsAPI = require("newsapi");

// https://newsapi.org/docs/endpoints/sources
const newsapi = new NewsAPI(process.env.NEWS_API);
// @desc    setDevice Information
// @route   GET /api/news
// @access  Public
const getNews = asyncHandler(async (req, res) => {
  const response = await newsapi.v2.sources({
    category: "technology",
    language: "en",
    // country: "us",
  });

  res.status(200).json(response);
});

module.exports = {
  getNews,
};
