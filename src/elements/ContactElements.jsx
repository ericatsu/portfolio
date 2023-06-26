import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export const ContactInfo = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 40px;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 24px;
`;

export const ContactItem = styled.p`
  font-size: 18px;
  color: #777777;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

export const ContactLink = styled.a`
  color: #1e90ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactForm = styled.form`
  flex-basis: 50%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const FormTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 24px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  padding: 8px 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  margin-bottom: 16px;
  padding: 8px 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

export const FormButton = styled.button`
  background-color: #1e90ff;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1177dd;
  }
`;
