import React, { createContext, useState, useEffect, useRef } from "react";
import { useVideos } from "../hooks/useVideos";

import PCMPlayer from "pcm-player";
import { downsampleBuffer, getLinear16 } from "../utils/utils";

export const AvatarContext = createContext();

const AvatarContextProvider = ({ children }) => {
  const { avatar } = useVideos();
  const [start, setStart] = useState(false);
  const [error, setError] = useState("");

  const [responseData, setResponseData] = useState({
    image: null,
    audio_contents: null,
  });
  const ws = useRef(null);
  const audioContext = useRef(null);
  const player = useRef(null);

  const process_microphone_buffer = async (bufferF32, sampleRate) => {
    const targetSampleRate = 16000;
    const downsampledBuffer = downsampleBuffer(
      bufferF32,
      sampleRate,
      targetSampleRate
    );
    const raw = await getLinear16(downsampledBuffer);
    const bytes = raw.buffer;

    ws.current.send(bytes);
  };

  const success = async (stream) => {
    audioContext.current = new AudioContext();

    const audioInput = audioContext.current.createMediaStreamSource(stream);

    await audioContext.current.audioWorklet.addModule(
      "worklet/script-processor.js"
    );

    const recorder = new AudioWorkletNode(
      audioContext.current,
      "script-processor"
    );

    recorder.port.onmessage = (e) => {
      process_microphone_buffer(e.data, audioContext.current.sampleRate);
    };

    audioInput.connect(recorder);
    recorder.connect(audioContext.current.destination);
  };

  const unsuccess = (err) => {
    console.log(err);
    setError(err);
    setStart(false);
  };

  const getUserMedia = () => {
    console.log("stream started");
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(success)
      .catch(unsuccess);
  };

  useEffect(() => {
    if (start) {
      setError("");
      ws.current = new WebSocket("ws://127.0.0.1:5000");
      ws.current.onopen = () => {
        getUserMedia();
        player.current = new PCMPlayer({
          inputCodec: "Int16",
          channels: 1,
          sampleRate: 16000,
          flushTime: 50,
        });

        ws.current.send(JSON.stringify({ avatar: avatar }));
      };

      ws.current.onmessage = (event) => {
        const { image, audio_contents } = JSON.parse(event.data);

        setResponseData({
          image,
          audio_contents,
        });
      };
      ws.current.onclose = () => {
        console.log("stream closed");
        setStart(false);
        setResponseData({
          image: null,
          audio_contents: null,
        });
      };
      ws.current.onerror = (e) => {
        console.log("stream close due to error");
        setError(e.message);
        setStart(false);
        player.current.destroy();
        ws.current.close();
        audioContext.current && audioContext.current.close();
      };

      return () => {
        player.current.destroy();
        ws.current.close();
        audioContext.current && audioContext.current.close();
        console.log("Demounting the component");
        setError("");
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  return (
    <AvatarContext.Provider
      value={{
        start,
        setStart,
        responseData,
        setResponseData,
        player,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};
export default AvatarContextProvider;
