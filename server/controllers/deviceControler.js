const asyncHandler = require("express-async-handler");
const Device = require("../models/deviceModel");

// @desc    setDevice Information
// @route   GET /api/goals
// @access  Public
const setDevice = asyncHandler(async (req, res) => {
  const { device_info } = req.body;

  const device_uid = device_info.device_uid;

  if (device_uid) {
    const deviceExits = await Device.findOne({ device_uid });
    console.log(deviceExits);

    if (deviceExits) {
      const updateDevice = await Device.findOneAndUpdate(
        device_uid,
        { count: deviceExits.count + 1 },
        { new: true }
      );
      res.status(200).json(updateDevice);
    } else {
      const updateDevice = await Device.create({
        device_uid: device_uid,
        count: 1,
      });
      res.status(200).json(updateDevice);
    }
  } else {
    res.status(500).json("something wrong");
  }
});

module.exports = {
  setDevice,
};
