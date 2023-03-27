import mongoose from "mongoose";

const deviceSchema = mongoose.Schema(
  {
    device_uid: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Device", deviceSchema);
