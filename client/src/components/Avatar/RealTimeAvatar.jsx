import React, { useState, useEffect, useRef } from "react";
import { Col, Alert, Card, Form } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import PCMPlayer from "pcm-player";
import { downsampleBuffer, getLinear16 } from "../../utils/utils";
import DisplayResponse from "./DisplayResponse";

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
      ws.current = new WebSocket("wss://100.100.100.52:5000");
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
    <Col>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Img
            className="rounded-circle"
            variant="top"
            src={
              responseData.image
                ? `data:image/jpeg;base64,${responseData.image}`
                : "i/empty.png"
            }
          />
        </Card.Body>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Stack direction="horizontal" gap={3}>
            <Card.Link href="#" onClick={startHandler} disabled={start}>
              <i className="fas fa-play"></i>Start
            </Card.Link>
            <Card.Link href="#" onClick={stopHandler} disabled={!start}>
              <i className="fas fa-stop-circle"></i>Stop
            </Card.Link>
            <Form.Group>
              <Form.Select onChange={(e) => setAvatar(e.target.value)}>
                {" "}
                <option value="">Select avatar</option>
                {avatars.map((avatar) => (
                  <option key={avatar} value={avatar}>
                    <>{avatar.split("/").pop().replace(".mp4", "")}</>
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RealTimeAvatar;
