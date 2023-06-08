// import grpc from '@grpc/grpc-js';
import grpc from "@grpc/grpc-js";

import protoLoader from "@grpc/proto-loader";

const proto = grpc.loadPackageDefinition(
  protoLoader.loadSync("./protocol/integrator.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  })
);

// Setting up the grpc server credentials
const REMOTE_SERVER = "utopiaassistant-test.utopia.ai:443";

const client = new proto.utopia.brain.integrator.v1.Chatbot(
  REMOTE_SERVER,
  // grpc.credentials.createInsecure()
  grpc.credentials.createSsl()
);

export const sendMessage = (text, uuid) => {
  const request = {
    input_sentence: text,
    user_id: uuid,
    language: "EN_2_EN",
    model: "macri".toUpperCase(),
    mode: "AUDIO", // TODO!!!! segun la app
  };

  return new Promise((resolve, reject) => {
    client.RunBot(request, (error, response) => {
      if (error) return reject(error);
      resolve(response);
    });
  });
};

export const getInfoModel = (request) => {
  const { model, language } = request;
  const params = {
    model: model,
    language: language,
  };

  return new Promise((resolve, reject) => {
    client.GetInfoModel(params, (error, response) => {
      if (error) return reject(error);
      resolve(response);
    });
  });
};

export default sendMessage;
