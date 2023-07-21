import React from 'react';
import {
  AboutSection,
  LeftContainer,
  RightContainer,
  Title,
  Description,
  NumberWrapper,
  Subtitle,
  CardsContainer,
  Card,
  CardText,
  DiscoverMore,
  ArrowIcon,
  Img,
  ImgWrap,
} from '../elements/AboutElements';
import flutterDev from "../assets/images/flutter_dev.svg"
import webDev from "../assets/images/webdev.svg"
import cloud from "../assets/images/cloud.svg"

const About = () => {
  return (
    <AboutSection>
      <LeftContainer>
        <NumberWrapper>
        <Title>3+</Title>
        </NumberWrapper>
        <Subtitle>Years of Workings Experience</Subtitle>
      </LeftContainer>
      <RightContainer>
        <Description>
          Mobile & Web Developer, specialized in client-side functionality of applications, and designing, building, and maintaining the server side of web applications.
        </Description>
        <CardsContainer>
          <Card>
          <ImgWrap>
          <Img src={flutterDev} alt="{alt}"/>
          </ImgWrap>
            <CardText>Mobile Development</CardText>
            <DiscoverMore>
              Discover More <ArrowIcon>&rarr;</ArrowIcon>
            </DiscoverMore>
          </Card>
          <Card>
          <ImgWrap>
          <Img src={webDev} alt="{alt}"/>
          </ImgWrap>
            <CardText>Web Development</CardText>
            <DiscoverMore>
              Discover More <ArrowIcon>&rarr;</ArrowIcon>
            </DiscoverMore>
          </Card>
          <Card>
          <ImgWrap>
          <Img src={cloud} alt="{alt}"/>
          </ImgWrap>
            <CardText>Dev Ops</CardText>
            <DiscoverMore>
              Discover More <ArrowIcon>&rarr;</ArrowIcon>
            </DiscoverMore>
          </Card>
        </CardsContainer>
      </RightContainer>
    </AboutSection>
  );
};

export default About;
