import React, { useState, useEffect } from "react";
import { Card, Alert } from "react-bootstrap";

import AvatarChatContainer from "./AvatarChatContainer";
import AvatarView from "./AvatarView";
import AvatarSelector from "./AvatarSelector";

const AvatarDisplay = ({
  responseData,
  error,
  start,
  stopHandler,
  avatars,
  setAvatar,
  setText,
}) => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      content: "Hello I am ChatGPT, how can I help you?",
      role: "assistant",
    },
  ]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const avatarResponse = async () => {
      const response = await fetch("/api/chat/getanswer/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: message,
        }),
      });

      const responseData = await response.json();

      setText(responseData);

      const newMessage = {
        content: responseData,
        role: "assistant",
      };

      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
      setTyping(false);
    };
    if (typing) {
      avatarResponse();
    }
  }, [typing]);

  const handleSend = async (message) => {
    setMessage(message);
    const newMessage = {
      content: message,
      role: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Title>RealTime-TTS</Card.Title>
      <AvatarSelector
        avatars={avatars}
        setAvatar={setAvatar}
        start={start}
        stopHandler={stopHandler}
      />
      {/* Avatar view */}
      <AvatarView responseData={responseData} />
      {/* Chat component */}
      <AvatarChatContainer
        messages={messages}
        handleSend={handleSend}
        typing={typing}
      />
      {error && <Alert variant="danger">{error}</Alert>}
    </Card>
  );
};

export default AvatarDisplay;
