const mongoose = require("mongoose");

const promptImage = mongoose.Schema(
  {
    device_uid: {
      type: String,
    },
    prompt: {
      type: String,
    },
    image_url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PromptImage", promptImage);
