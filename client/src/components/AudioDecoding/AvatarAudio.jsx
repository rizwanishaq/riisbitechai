import React, { useRef, useEffect, useState } from "react";
import PCMPlayer from "pcm-player";

import { downsampleBuffer, getLinear16 } from "../../utils/utils";
import AvatarDisplay from "./AvatarDisplay";

const AvatarAudio = () => {
  const [responseData, setResponseData] = useState({
    image: null,
    audio_contents: null,
  });

  const ws = useRef(null);
  const audioContext = useRef(null);
  const player = useRef(null);
  const [text, setText] = useState("");

  const [start, setStart] = useState(false);
  const [error, setError] = useState("");

  const [audio_url, setAudio_Url] = useState("");

  const avatars = [
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_cartoo23323n.mp4",
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_metahuman.mp4",
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_another.mp4",
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_better_one.mp4",
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_Screenshot+from+2023-05-15+16-01-45-0-Enhanced-Animated.mp4",
  ];

  const [avatar, setAvatar] = useState(
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_cartoo23323n.mp4"
  );

  const process_microphone_buffer = async (event) => {
    const inputBuffer = event.inputBuffer;
    const buffer32 = inputBuffer.getChannelData(0);

    const targetSampleRate = 16000;
    const downsampledBuffer = downsampleBuffer(
      buffer32,
      event.inputBuffer.sampleRate,
      targetSampleRate
    );
    const raw = await getLinear16(downsampledBuffer);
    const bytes = raw.buffer;

    ws.current.send(bytes);
  };

  const success = async (stream) => {
    audioContext.current = new AudioContext();

    const audioBuffer = await audioContext.current.decodeAudioData(stream);

    const source = audioContext.current.createBufferSource();
    source.buffer = audioBuffer;

    const scriptProcessor = audioContext.current.createScriptProcessor(
      2048,
      1,
      1
    );

    scriptProcessor.onaudioprocess = process_microphone_buffer;

    scriptProcessor.connect(audioContext.current.destination);

    source.connect(scriptProcessor);
    source.start();
  };

  useEffect(() => {
    if (start) {
      ws.current = new WebSocket("wss://100.100.100.52:5000");
      ws.current.onopen = () => {
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
        setResponseData({
          image: null,
          audio_contents: null,
        });
      };
      ws.current.onerror = (e) => {
        console.log("stream close due to error");

        player.current.destroy();
        ws.current.close();
        audioContext.current && audioContext.current.close();
      };

      return () => {
        player.current.destroy();
        ws.current.close();
        audioContext.current && audioContext.current.close();
        console.log("Demounting the component");
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

  useEffect(() => {
    if (audio_url !== "") {
      const getAudioDecoding = async () => {
        const response = await fetch(
          "https://100.100.100.52:5000/api/mimic/audio",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              audio_url: `${audio_url}`,
            }),
          }
        );

        if (audioContext.current) {
          audioContext.current.close();
          audioContext.current = null;
        }

        const arrayBuffer = await response.arrayBuffer();
        success(arrayBuffer);
        if (!start) setStart(true);
      };

      getAudioDecoding();
    }
  }, [audio_url]);

  const stopHandler = (e) => {
    setStart(false);
  };

  const startHandler = (e) => {
    setStart(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://100.100.100.52:5000/api/tts/synthesis",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: "en-US",
          voice: "UTUSF",
          text: text,
        }),
      }
    );

    const responseData = await response.json();
    setAudio_Url(responseData.audio_url);
    setText("");
  };

  return (
    <>
      <AvatarDisplay
        responseData={responseData}
        error={error}
        start={start}
        startHandler={startHandler}
        stopHandler={stopHandler}
        avatars={avatars}
        setAvatar={setAvatar}
        handleSubmit={handleSubmit}
        setText={setText}
        text={text}
      />
    </>
  );
};

export default AvatarAudio;
