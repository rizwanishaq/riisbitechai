import { WebSocketServer } from "ws";
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import { v4 as uuidv4 } from "uuid";
import path from "path";

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
import SadTalkerRoutes from "./routes/sadTalkerRoutes.js";
import processWebSocket from "./services/mimicServices/mimicServices.js";
import HealthCheck from "./routes/healthRoutes.js";

// Connecting database
connectDB();
const app = express();
const port = process.env.PORT || 5000;

// Middleware initialized
app.use(express.json({ limit: "50mb" })); // Enable json parsing
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(errorHandler);
app.use(
  cors((req, callback) => {
    callback(null, { origin: true, credentials: true });
  })
);

// Routes
app.use("/api/device", DeviceRoutes);
app.use("/api/machinelearning", MachinelearningRoutes);
app.use("/api/news", NewsRoutes);
app.use("/api/mimic", MimicRoutes);
app.use("/api/tts", TTSRoutes);
app.use("/api/chat", ChatRoutes);
app.use("/api/sadTalker", SadTalkerRoutes);
app.use("/healthcheck", HealthCheck);

app.use(express.static("../client/build"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("../client", "build", "index.html"))
);

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

  processWebSocket(ws, uuidv4());
});
