import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import * as dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
dotenv.config();
import fetch from "node-fetch";
globalThis.fetch = fetch;

import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import DeviceRoutes from "./routes/deviceRoutes.js";
import MachinelearningRoutes from "./routes/machinelearningRoutes.js";
// import NewsRoutes from "./routes/newsRoutes.js";

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
app.use(errorHandler);
// Routes
app.use("/api/device", DeviceRoutes);
app.use("/api/machinelearning", MachinelearningRoutes);
// app.use("/api/news", NewsRoutes);

// Server started to listen
app.listen(port, () => {
  console.log(`CORS-enables server is listening on port ${port}`.green);
});
