import React from 'react';
import { FiSmartphone, RiGlobeFill, RiPencilFill } from 'react-icons/all';
import {
  AboutSection,
  LeftContainer,
  RightContainer,
  Title,
  Description,
  NumberWrapper,
  Subtitle,
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
        <Title>3+</Title>
        <Subtitle>Years of Workings Experience</Subtitle>
        <Description>
          Mobile & Web Developer, specialized in client-side and functionality of applications, and designing, building, and maintaining the server side of web applications.
        </Description>
      </LeftContainer>
      <RightContainer>
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
          <CardText>UI/UX Design</CardText>
          <DiscoverMore>
            Discover More <ArrowIcon>&rarr;</ArrowIcon>
          </DiscoverMore>
        </Card>
      </RightContainer>
    </AboutSection>
  );
};

export default About;
