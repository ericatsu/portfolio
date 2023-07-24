import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMessage } from 'react-icons/ai';
import Axios from 'axios';

const FloatingChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const toggleChat = () => {
    setShowChat((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    const newMessages = [...messages, { text: inputText, type: 'user' }];
    setMessages(newMessages);

    try {
      const response = await Axios.post('/api/dialogflow', { text: inputText });
      const botResponse = response.data;
      const newBotMessage = { text: botResponse, type: 'bot' };
      setMessages([...newMessages, newBotMessage]);
    } catch (error) {
      console.error('Error sending message to Dialogflow:', error);
    }

    setInputText('');
  };

  return (
    <ChatWrapper>
      {showChat && (
        <ChatContainer>
          <ChatMessages>
            {messages.map((message, index) => (
              <ChatMessage key={index} type={message.type}>
                {message.text}
              </ChatMessage>
            ))}
          </ChatMessages>
          <ChatInputContainer>
            <ChatInput
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <ChatSendButton onClick={handleSendMessage}>Send</ChatSendButton>
          </ChatInputContainer>
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
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-height: 300px;
  overflow-y: auto;
  padding: 12px;
  width: 300px;
`;

const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatMessage = styled.div`
  background-color: ${(props) => (props.type === 'bot' ? '#dff7d7' : '#e3f2fd')};
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 8px;
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const ChatSendButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  margin-left: 8px;
  cursor: pointer;
`;

const ChatButton = styled.div`
  background-color: #007bff;
  color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
`;