import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useVideos } from "../../hooks/useVideos";
import DisplayVideo from "./DisplayVideo";
import LanguageSelector from "./LanguageSelector";
import VoiceSelector from "./VoiceSelector";
import AvatarsList from "./AvatarsList";
import AvatarText from "./AvatarText";
import AvatarButtons from "./AvatarButtons";

const AvatarOptions = () => {
  const { setAvatar, avatar, setAudioUrl, hd, setHd, setLanguage, setVoice } =
    useVideos();
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
      const response = await fetch("/api/mimic/videosurl");
      const responseData = await response.json();
      setVideos(responseData.urls);
    };
    getVideos();
  }, []);

  useEffect(() => {
    const getLanguages = async () => {
      const response = await fetch("/api/tts/languages");
      const responseData = await response.json();
      setLanguages(responseData.languages);
    };
    getLanguages();
  }, []);

  useEffect(() => {
    const getVoices = async () => {
      const response = await fetch(`/api/tts/voices/${options.language}`);
      const responseData = await response.json();
      setVoices(responseData.voices);
    };
    if (options.language !== "") {
      getVoices();
    }
  }, [options.language]);

  useEffect(() => {
    if (options.voice !== "") setVoice(options.voice);
    if (options.language !== "") setLanguage(options.language);
  }, [options]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/tts/synthesis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: options.language,
        voice: options.voice,
        text: options["text-content"],
      }),
    });

    const responseData = await response.json();
    setAudioUrl(responseData.audio_url);
  };

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body className="pb-0">
        <Form className="align-items-center mt-2" onSubmit={handleSubmit}>
          {/* Language Selector */}
          <LanguageSelector
            options={options}
            languages={languages}
            setOptions={setOptions}
          />
          {/* Voice Selector */}
          <VoiceSelector
            options={options}
            voices={voices}
            setOptions={setOptions}
          />
          {/* List of avatars */}
          <AvatarsList avatar={avatar} setAvatar={setAvatar} videos={videos} />
          {/* Text Content Area  */}
          <AvatarText setOptions={setOptions} options={options} />
          {/* Buttons */}
          <AvatarButtons options={options} setHd={setHd} hd={hd} />
        </Form>
      </Card.Body>
      <Card.Body>
        <DisplayVideo />
      </Card.Body>
    </Card>
  );
};

export default AvatarOptions;
