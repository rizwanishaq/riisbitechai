import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillPersonFill } from "react-icons/bs";
import Stack from "react-bootstrap/Stack";
import { useVideos } from "../../hooks/useVideos";

const AvatarOptions = () => {
  const { setAvatar, avatar, setAudioUrl, hd, setHd } = useVideos();
  const [videos, setVideos] = useState([]);
  const [options, setOptions] = useState({
    language: "",
    voice: "",
    "text-content": "",
  });
  const [languages, setLanguages] = useState([]);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await fetch(
        "https://100.100.100.52:5000/api/mimic/videosurl"
      );
      const responseData = await response.json();
      setVideos(responseData.urls);
    };
    getVideos();
  }, []);

  useEffect(() => {
    const getLanguages = async () => {
      const response = await fetch(
        "https://100.100.100.52:5000/api/tts/languages"
      );
      const responseData = await response.json();
      setLanguages(responseData.languages);
    };
    getLanguages();
  }, []);

  useEffect(() => {
    const getVoices = async () => {
      const response = await fetch(
        `https://100.100.100.52:5000/api/tts/voices/${options.language}`
      );
      const responseData = await response.json();
      setVoices(responseData.voices);
    };
    if (options.language !== "") {
      getVoices();
    }
  }, [options.language]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://100.100.100.52:5000/api/tts/synthesis",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: options.language,
          voice: options.voice,
          text: options["text-content"],
        }),
      }
    );

    const responseData = await response.json();
    setAudioUrl(responseData.audio_url);
  };

  return (
    <Card>
      <Card.Body className="pb-0">
        <Card.Title className="text-center">Avatar settings</Card.Title>
        <Form className="align-items-center mt-3" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Select
              onChange={(e) =>
                setOptions({ ...options, language: e.target.value })
              }
            >
              {" "}
              <option value="">Select language</option>
              {languages &&
                languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Voice</Form.Label>
            <Form.Select
              onChange={(e) =>
                setOptions({ ...options, voice: e.target.value })
              }
            >
              <option value="">Select voice</option>
              {voices &&
                voices.map((voice) => (
                  <option key={voice} value={voice}>
                    {voice}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>
              <Stack direction="horizontal" gap={3}>
                <Form.Group className="mt-1 ms-auto">
                  <video
                    src={avatar}
                    width="15%"
                    height="15%"
                    className="img-thumbnail rounded-circle"
                  ></video>
                </Form.Group>
                <span> &nbsp;Avatar</span>
              </Stack>
            </Form.Label>
            <Form.Select onChange={(e) => setAvatar(e.target.value)}>
              {videos &&
                videos.map((url) => (
                  <option value={url} key={url}>
                    <>{url.split("/").pop().replace(".mp4", "")}</>
                  </option>
                ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-3 mb-3">
            <Form.Label>Text content</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              placeholder="Please enter text content"
              onChange={(e) =>
                setOptions({ ...options, "text-content": e.target.value })
              }
            />
          </Form.Group>
          <Stack direction="horizontal" gap={3}>
            <Button
              className="mt-3 mb-3"
              type="submit"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <BsFillPersonFill size={20} />
              <span> &nbsp;Generate Avatar</span>
            </Button>
            <Form.Group className="mt-3 mb-3 ms-auto">
              <Form.Check
                type="switch"
                id="hd-switch"
                label="HD"
                checked={options.hd}
                onChange={(e) => {
                  setHd(!hd);
                }}
              />
            </Form.Group>
          </Stack>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AvatarOptions;
