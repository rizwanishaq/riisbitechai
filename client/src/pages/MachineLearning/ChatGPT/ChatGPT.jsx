import React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

import ChatCard from "../../../components/DashBoard/ChatCard/ChatCard";

const ChatGPT = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>ChatGPT demo</h1>
        <Nav>
          <li className="breadcrumb-item">
            This simple demo page showcases the functionality of ChatGPT, a
            powerful language model developed by OpenAI. ChatGPT is an advanced
            AI system that uses the GPT-3.5 architecture to generate human-like
            responses based on the input it receives. It can understand and
            respond to a wide range of topics, providing users with informative
            and engaging conversations. This demo highlights the model's ability
            to understand queries and generate accurate and coherent answers,
            demonstrating its potential for various applications in natural
            language processing and conversation generation.
          </li>
        </Nav>
      </div>

      <section className="section faq">
        <Row>
          <ChatCard />
        </Row>
      </section>
    </main>
  );
};

export default ChatGPT;
