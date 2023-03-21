const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema({
  deviceUid: {
    type: String,
    require: [true, "Please add a user deviceUid"],
  },
});
