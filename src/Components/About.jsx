import React from 'react';
import { FiSmartphone } from 'react-icons/fi';
import { RiGlobeFill, RiPencilFill } from 'react-icons/ri';
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
  CardIcon,
  CardText,
  DiscoverMore,
  ArrowIcon,
} from '../elements/AboutElements';

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
            <CardIcon>
              <FiSmartphone />
            </CardIcon>
            <CardText>Mobile Development</CardText>
            <DiscoverMore>
              Discover More <ArrowIcon>&rarr;</ArrowIcon>
            </DiscoverMore>
          </Card>
          <Card>
            <CardIcon>
              <RiGlobeFill />
            </CardIcon>
            <CardText>Web Development</CardText>
            <DiscoverMore>
              Discover More <ArrowIcon>&rarr;</ArrowIcon>
            </DiscoverMore>
          </Card>
          <Card>
            <CardIcon>
              <RiPencilFill />
            </CardIcon>
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
