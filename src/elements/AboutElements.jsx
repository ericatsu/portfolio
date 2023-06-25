import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 80px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px;
  }
`;

export const LeftContainer = styled.div`
  flex-basis: 30%;
  justify-content: start;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #777777;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const NumberWrapper = styled.div`
  font-size: 64px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #777777;
  text-align: start;
`;

export const RightContainer = styled.div`
  flex-basis: 70%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: calc(33.33% - 40px);
  background-color: #ffffff;
  padding: 54px;
  text-align: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f9f9f9;
    color: #1e90ff;
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
    margin-bottom: 20px;
  }
`;

export const CardIcon = styled.span`
  font-size: 64px;
  margin-bottom: 16px;
`;

export const CardText = styled.p`
  font-size: 18px;
  color: #333333;
`;

export const DiscoverMore = styled.span`
  display: none;
  font-size: 14px;
  color: #1e90ff;
  margin-top: 16px;

  ${Card}:hover & {
    display: block;
  }
`;

export const ArrowIcon = styled.span`
  margin-left: 4px;
`;
