import styled from 'styled-components';
import { RiArrowRightSLine, RiPhoneLine } from 'react-icons/ri';

export const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HireMeButton = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4f4f;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const CallButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PhoneIcon = styled(RiPhoneLine)`
  font-size: 18px;
  margin-right: 8px;
`;

export const ImageWrapper = styled.div`
  width: 35%;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

