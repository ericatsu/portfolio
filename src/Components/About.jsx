import React from 'react'
import { FiSmartphone, RiGlobeFill, RiPencilFill } from 'react-icons/all';
import { AboutSection, ArrowIcon, Card, CardIcon, CardText, DiscoverMore } from '../elements/AboutElements';

const About = () => {
  return (
    <AboutSection>
      {/* Rest of the code remains the same... */}
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
      {/* Rest of the code remains the same... */}
    </AboutSection>
  );
};

export default About;