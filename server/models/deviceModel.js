const mongoose = require("mongoose");

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

module.exports = mongoose.model("Device", deviceSchema);
