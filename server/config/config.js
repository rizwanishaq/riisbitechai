import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import * as dotenv from "dotenv";
dotenv.config();

const proto = grpc.loadPackageDefinition(
  protoLoader.loadSync("./protocol/wav2lip.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  })
);

// Setting up the grpc server credentials
const REMOTE_SERVER = `${process.env.MODEL_IP}:${process.env.MODEL_PORT}`;

const client = new proto.wav2lip.v1.Wav2Lip(
  REMOTE_SERVER,
  grpc.credentials.createInsecure()
);

export default client;
