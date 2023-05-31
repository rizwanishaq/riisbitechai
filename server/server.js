import WebSocket, { WebSocketServer } from "ws";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import * as dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import { v4 as uuidv4 } from "uuid";
dotenv.config();
import fetch from "node-fetch";
globalThis.fetch = fetch;

import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import DeviceRoutes from "./routes/deviceRoutes.js";
import MachinelearningRoutes from "./routes/machinelearningRoutes.js";
import NewsRoutes from "./routes/newsRoutes.js";
import ChatGPTRoutes from "./routes/chatGPTRoutes.js";
import MimicRoutes from "./routes/mimicRoutes.js";
import processWebSocket from "./gRPCServices/streamProcessing.js";
import client from "./config/config.js";

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
app.use("/api/news", NewsRoutes);
app.use("/api/chatgpt", ChatGPTRoutes);
app.use("/api/mimic", MimicRoutes);

// Server started to listen
const server = app.listen(port, () => {
  console.log(`CORS-enables server is listening on port ${port}`.green);
});

// Websocket Server
const wss = new WebSocketServer({ server: server });
console.log("websocket server created".green);
wss.on("connection", (ws, req) => {
  console.log(
    `websocket connection from ${req.connection.remoteAddress}`.red.underline
      .bold
  );

  processWebSocket(ws, client, uuidv4());
});
