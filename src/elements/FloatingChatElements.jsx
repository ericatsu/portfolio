import styled from 'styled-components';

export const ChatbotContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border: 1px solid black;
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.2);
  }

  .chatbot-messages {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
    background-color: white;
    border: 1px solid black;
    overflow-y: scroll;
  }

  &.chatbot-expanded {
    .chatbot-messages {
      display: block;
    }
  }
`;

export const ChatbotInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 10px;
`;

export const ChatbotButton = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
`;

export const ChatbotMessage = styled.div`
  margin: 10px;
`;

export const ChatbotExpandButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;