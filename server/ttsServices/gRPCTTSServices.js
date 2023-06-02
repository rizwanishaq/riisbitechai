import grpc from "@grpc/grpc-js";

import { createFile, withWaveHeader, concat } from "./utils.js";

import protoLoader from "@grpc/proto-loader";
import { uploadAudio } from "../utils/awsUtils.js";

const proto = grpc.loadPackageDefinition(
  protoLoader.loadSync("./protocol/tts.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  })
);

// Setting up the grpc server credentials
const REMOTE_SERVER = "172.26.161.45:60055";

const client = new proto.utopia.texttospeech.v1.TextToSpeech(
  REMOTE_SERVER,
  grpc.credentials.createInsecure()
);

const metadata = new grpc.Metadata();
metadata.add("request_id", "random_id");

export const listLanguages = () => {
  return new Promise((resolve, reject) => {
    client.ListLanguages({}, metadata, (error, response) => {
      if (error) return reject(error);
      resolve(response);
    });
  });
};

export const listVoices = (language) => {
  const params = { language_code: language };

  return new Promise((resolve, reject) => {
    client.ListVoices(params, metadata, (error, response) => {
      if (error) return reject(error);
      resolve(response);
    });
  });
};

export const SynthesizeSpeech = ({ data, fileName }) => {
  const { language, voice, text } = data;

  const input = {
    text: text,
    ssml: "ssml",
  };
  const ssml_gender = "FEMALE";

  const voice_config = {
    language_code: language,
    name: voice,
    ssml_gender,
  };

  const audio_config = {
    audio_encoding: "LINEAR16",
    speaking_rate: 1.0,
    pitch: 1,
    volume_gain_db: 2.0,
    sample_rate_hertz: 22050,
    effects_profile_id: "",
  };

  const ttsRequest = {
    input,
    voice: voice_config,
    audio_config,
  };

  return new Promise((resolve, reject) => {
    const call = client.SynthesizeSpeech(ttsRequest, metadata);
    const file = createFile(fileName);

    const sampleRate = 22050;

    let totalBuffer;

    call.on("data", (chunk) => {
      const { audio_content } = chunk;
      chunk.sampleRate = sampleRate;

      let ab = Buffer.from(audio_content);
      totalBuffer = totalBuffer
        ? Buffer.from(concat(Buffer.from(totalBuffer), ab))
        : Buffer.from(ab);
    });
    call.on("error", (error) => {
      console.log(error);
      reject();
    });

    call.on("status", (status) => {
      if (status.details) console.log(status.details);
    });

    call.on("end", () => {
      let wav = Buffer.from(
        withWaveHeader(Buffer.from(totalBuffer), 1, sampleRate)
      );
      file.write(wav);
      file.end();
    });

    resolve(uploadAudio(`${fileName}.wav`));
  });
};

export default SynthesizeSpeech;
