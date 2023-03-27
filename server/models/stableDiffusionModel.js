import mongoose from "mongoose";

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

export default mongoose.model("PromptImage", promptImage);
