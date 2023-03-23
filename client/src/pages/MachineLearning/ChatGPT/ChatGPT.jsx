import React from "react";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const ChatGPT = () => {
  const { register, handleSubmit, reset } = useForm();
  const onChange = async (data) => {
    console.log(data);
  };
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>ChatGPT demo</h1>
        <Nav>
          <li className="breadcrumb-item">
            TensorFlow.js enables developers to create custom machine learning
            models for real-time audio analysis in the browser. With the ability
            to recognize and classify audio events such as speech, music, and
            environmental sounds, this technology has diverse applications
            including voice assistants, music streaming services, and smart home
            devices. Its high-level API simplifies the process of building and
            training neural networks, making it a valuable tool for any
            developer.
          </li>
        </Nav>
      </div>

      <section className="section faq">
        <Row>
          <div style={{ position: "relative", height: "500px" }}>
            <MainContainer>
              <ChatContainer>
                <MessageList>
                  <Message
                    model={{
                      message: "Hello my friend",
                      sentTime: "just now",
                      sender: "Joe",
                    }}
                  />
                </MessageList>
                <MessageInput placeholder="Type message here" />
              </ChatContainer>
            </MainContainer>
          </div>
        </Row>
      </section>
    </main>
  );
};

export default ChatGPT;
