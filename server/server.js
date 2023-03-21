const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");

// Connecting database
connectDB();
const app = express();
const port = process.env.PORT || 5000;

// Middleware initialized
app.use(morgan("common")); // Logging
app.use(helmet()); // For security
app.use(cors()); // Enable all cors request
app.use(express.json()); // Enable json parsing
app.use(express.urlencoded({ extended: false }));
// Routes
app.use("/api/device", require("./routes/deviceRoutes"));
app.use("/api/machinelearning", require("./routes/machinelearningRoutes"));

// Server started to listen
app.listen(port, () => {
  console.log(`CORS-enables server is listening on port ${port}`.green);
});
