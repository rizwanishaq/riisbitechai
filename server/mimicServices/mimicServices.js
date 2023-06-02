import streamBuffers from "stream-buffers";
import { v4 as uuidv4 } from "uuid";
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

const processWebSocket = (
  ws,
  uid = "rizwan",
  name = "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_another.mp4"
) => {
  const myWritableStreamBuffer = new streamBuffers.WritableStreamBuffer({
    initialSize: 100 * 1024, // start at 100 kilobytes.
    incrementAmount: 10 * 1024, // grow by 10 kilobytes each time buffer overflows.
  });

  const call = client.wav2lipStream();

  ws.on("message", (audio) => {
    try {
      const { avatar } = JSON.parse(audio);
      console.log(avatar);
      if (avatar) name = JSON.parse(audio)["avatar"];
      call.write({ uid: uid, name: name });
    } catch (_) {
      myWritableStreamBuffer.write(audio);
    }
  });

  const writeInterval = setInterval(() => {
    if (myWritableStreamBuffer.size() >= 1600) {
      const data = myWritableStreamBuffer.getContents(1600);
      if (data && data.length === 1600) {
        call.write({ audio_contents: data });
      }
    }
  }, 50);

  call.on("data", (chunk) => {
    ws.send(
      JSON.stringify({
        image: chunk.image.toString(),
        audio_contents: chunk.audio_contents,
      })
    );
  });
  call.on("error", (error) => {
    console.error(error);
    myWritableStreamBuffer.end();
    myWritableStreamBuffer.destroy();
    clearInterval(writeInterval);
  });

  call.on("end", () => {
    console.log("grpc stream stopped");
  });

  ws.on("close", () => {
    console.log("websocket connection close");
    myWritableStreamBuffer.end();
    myWritableStreamBuffer.destroy();
    clearInterval(writeInterval);
    call.end();
  });
};

export const generateAvatar = (audio_url, name) => {
  return new Promise((resolve, reject) => {
    const request = {
      uid: uuidv4(),
      audio_url: audio_url,
      name: name,
    };

    client.predict(request, (err, response) => {
      if (err) {
        console.log(err);
        return reject(`Error during request -> ${err}`);
      }
      return resolve({
        video_url: response.video_url,
      });
    });
  });
};

export default processWebSocket;
