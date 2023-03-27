import asyncHandler from "express-async-handler";
import NewsAPI from "newsapi";
import * as dotenv from "dotenv";
dotenv.config();

// https://newsapi.org/docs/endpoints/sources
const newsapi = new NewsAPI(process.env.NEWS_API);
// @desc    setDevice Information
// @route   GET /api/news
// @access  Public
export const getNews = asyncHandler(async (req, res) => {
  const response = await newsapi.v2.sources({
    category: "technology",
    language: "en",
    // country: "us",
  });

  res.status(200).json(response);
});

export default getNews;
