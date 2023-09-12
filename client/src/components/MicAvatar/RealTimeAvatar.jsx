import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import PCMPlayer from "pcm-player";
import { downsampleBuffer, getLinear16 } from "../../utils/utils";
import AvatarSelection from "./AvatarSelection";
import DisplayAvatar from "./DisplayAvatar";

const RealTimeAvatar = () => {
  const [avatar, setAvatar] = useState(
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_another.mp4"
  );

  const [start, setStart] = useState(false);
  const [error, setError] = useState("");
  const avatars = [
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_cartoo23323n.mp4",
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_metahuman.mp4",
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_another.mp4",
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_better_one.mp4",
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_Screenshot+from+2023-05-15+16-01-45-0-Enhanced-Animated.mp4",
  ];

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
      ws.current = new WebSocket("wss://devavatar.utopia.ai/ws");
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
        console.log(`stream close due to error : ${JSON.stringify(e)}`);

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

  useEffect(() => {
    if (responseData.audio_contents != null) {
      try {
        player.current.feed(new Int8Array(responseData.audio_contents.data));
      } catch (error) {
        setError(error.message);
      }
    }
    // eslint-disable-next-line
  }, [responseData]);

  const stopHandler = (e) => {
    setStart(false);
  };

  const startHandler = (e) => {
    setStart(true);
  };
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Title>RealTime-Mic</Card.Title>
      <AvatarSelection
        error={error}
        avatars={avatars}
        start={start}
        startHandler={startHandler}
        stopHandler={stopHandler}
        setAvatar={setAvatar}
      />
      <DisplayAvatar responseData={responseData} />
    </Card>
  );
};

export default RealTimeAvatar;
