import React from "react";
import Card from "react-bootstrap/Card";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const AvatarChatContainer = ({ messages, typing, handleSend }) => {
  return (
    <Card.Body>
      <div className="activity">
        <div
          style={{
            position: "relative",
            height: "270px",
            overflow: "hidden",
          }}
        >
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="auto"
                autoScrollToBottom={true}
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="ChatSystem is processing" />
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
                    ></Message>
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

export default AvatarChatContainer;
