import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const ChatCard = () => {
  const toast = useToast();
  const { register, handleSubmit } = useForm();
  const [systemMessage, setSystemMessage] = useState({
    content:
      "Explain things like you're talking to a software professional with 2 years of experience.",
  });

  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      content: "Hello I am ChatGPT, how can I help you?",
      role: "assistant",
    },
  ]);

  const onChange = async (data) => {
    setSystemMessage({
      content: data.system,
    });
  };

  const handleSend = async (message) => {
    const newMessage = {
      content: message,
      role: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    // set a typing indicator (chatGPT is typing)
    setTyping(true);
    // process message to chatGPT(send it over and see the response)
    await processMessageToChatGPT(newMessages);
  };

  const processMessageToChatGPT = async (chatMessages) => {
    const apiMessages = chatMessages.map((messageObject) => {
      return { role: messageObject.role, content: messageObject.content };
    });

    const apiRequestBody = {
      messages: [
        {
          role: "system",
          content:
            systemMessage.content.length > 0
              ? systemMessage.content
              : "Explain things like you're talking to a software professional with 2 years of experience.",
        }, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/chatgpt",
        { messages: JSON.stringify(apiRequestBody) },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessages([
        ...chatMessages,
        {
          content: response.data.completion_texts,
          role: "assistant",
        },
      ]);
      setTyping(false);
    } catch (error) {
      toast({
        title: error.code,
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: false,
      });
      setTyping(false);
    }
  };
  return (
    <Card.Body>
      <Card.Title>
        <section className="showcase">
          <Form onChange={handleSubmit(onChange)}>
            <Form.Group className="mb-3">
              <Form.Label>SYSTEM</Form.Label>
              <Form.Control
                type="text"
                {...register("system", { required: true })}
                placeholder="Enter context ...."
              />
            </Form.Group>
            <Form.Text className="text-muted">
              Default: Explain things like you're talking to a software
              professional with 2 years of experience.
            </Form.Text>
          </Form>
        </section>
      </Card.Title>

      <div className="activity">
        <div style={{ position: "relative", height: "500px" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="ChatGPT is processing" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  return (
                    <Message
                      key={i}
                      model={{
                        message: message.content,
                        sender: message.role,
                        direction:
                          message.role === "user" ? "outgoing" : "incoming",
                      }}
                    />
                  );
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </Card.Body>
  );
};

export default ChatCard;
