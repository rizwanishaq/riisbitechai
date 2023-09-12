import asyncHandler from "express-async-handler";

// @desc    setDevice Information
// @route   GET /api/goals
// @access  Public
export const setDevice = asyncHandler(async (req, res) => {
  res.status(200).json({ response: "200 OK" });
});
