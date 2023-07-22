import styled from 'styled-components';
import { RiPhoneLine } from 'react-icons/ri';

export const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  padding: 0 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0 20px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Name = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HireMeButton = styled.button`
  background-color: #1e90ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.0rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 10px; 

  &:hover {
    background-color: #4fb9ffcf;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CallButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;

  &:hover {
    background-color: #4fb9ffcf4c;
    border-radius: 10px;
    padding: 6px 12px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const PhoneIcon = styled(RiPhoneLine)`
  font-size: 2rem;
  margin-right: 8px;
`;

export const ImageWrapper = styled.div`
  width: 40%;
  text-align: center;
  

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
   max-width: 100%;
  max-height: 180vh; 
  border: none;
  border-radius: 10%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

