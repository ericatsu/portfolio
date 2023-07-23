import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMessage } from 'react-icons/ai';

const FloatingChat = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat((prevState) => !prevState);
  };

  return (
    <ChatWrapper>
      {showChat && (
        <ChatContainer>
          {/* Chat content goes here */}
          <ChatMessage>Hello! How can I assist you today?</ChatMessage>
          {/* Add your chat form or input here */}
        </ChatContainer>
      )}
      <ChatButton onClick={toggleChat}>
        <AiOutlineMessage />
      </ChatButton>
    </ChatWrapper>
  );
};

export default FloatingChat;

const ChatWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;

const ChatContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
`;

const ChatButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ChatMessage = styled.div`
  padding: 16px;
  font-size: 16px;
`;
