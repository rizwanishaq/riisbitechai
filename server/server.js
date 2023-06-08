import WebSocket, { WebSocketServer } from "ws";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import * as dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import { v4 as uuidv4 } from "uuid";
import https from "https";
import fs from "fs";

dotenv.config();
import fetch from "node-fetch";
globalThis.fetch = fetch;

import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import DeviceRoutes from "./routes/deviceRoutes.js";
import MachinelearningRoutes from "./routes/machinelearningRoutes.js";
import NewsRoutes from "./routes/newsRoutes.js";
import MimicRoutes from "./routes/mimicRoutes.js";
import TTSRoutes from "./routes/ttsRoutes.js";
import ChatRoutes from "./routes/chatRoutes.js";
import processWebSocket from "./mimicServices/mimicServices.js";

// Connecting database
connectDB();
const app = express();
const port = process.env.PORT || 5000;

// Middleware initialized
app.use(morgan("common")); // Logging
app.use(helmet()); // For security
app.use(express.json()); // Enable json parsing
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
); // Enable all cors request

// Routes
app.use("/api/device", DeviceRoutes);
app.use("/api/machinelearning", MachinelearningRoutes);
app.use("/api/news", NewsRoutes);
app.use("/api/mimic", MimicRoutes);
app.use("/api/tts", TTSRoutes);
app.use("/api/chat", ChatRoutes);

// Server started to listen
const server = https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
    },
    app
  )
  .listen(port, () => {
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

  processWebSocket(ws, uuidv4());
});
