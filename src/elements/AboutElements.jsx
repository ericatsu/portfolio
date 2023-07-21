import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 50px;
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
  flex-basis: 25%;
  justify-content: start;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 6rem;
  font-weight: bold;
  color: #0078af;
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
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
  flex-basis: 75%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  background: #fff;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 border-radius: 10px;
 max-height: 540px;
 padding: 50px;
 transition: all 0.2s ease-in-out;
 box-shadow: 0 1px 3px rgb(0,0,0,0.2);

 &:hover{
     transform: scale(1.02);
     transition: all 0.2s ease-in-out;
     cursor: pointer;
 }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
    margin-bottom: 20px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 655px;
  height: 80%;
  
`

export const Img = styled.img`
  width: 150px;
  height: 100px;
  justify-content: center;
`

export const CardText = styled.p`
  font-size: 15px;
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
