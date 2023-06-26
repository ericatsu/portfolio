import React from 'react';
import {
  SkillsSection,
  SkillsContainer,
  Title,
  SkillList,
  SkillItem,
  SkillIcon,
  SkillText,
} from '../elements/SkillsElements';

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsContainer>
        <Title>Skills</Title>
        <SkillList>
          <SkillItem>
            <SkillIcon>Flutter/Dart</SkillIcon>
            <SkillText>Mobile App Development</SkillText>
          </SkillItem>
          <SkillItem>
            <SkillIcon>React</SkillIcon>
            <SkillText>Web App Development</SkillText>
          </SkillItem>
          <SkillItem>
            <SkillIcon>MongoDB</SkillIcon>
            <SkillText>NoSQL Database</SkillText>
          </SkillItem>
          <SkillItem>
            <SkillIcon>PostgreSQL</SkillIcon>
            <SkillText>Relational Database</SkillText>
          </SkillItem>
          <SkillItem>
            <SkillIcon>MySQL</SkillIcon>
            <SkillText>Relational Database</SkillText>
          </SkillItem>
          <SkillItem>
            <SkillIcon>Java Spring Boot</SkillIcon>
            <SkillText>Backend Development</SkillText>
          </SkillItem>
          <SkillItem>
            <SkillIcon>Express</SkillIcon>
            <SkillText>Backend Development</SkillText>
          </SkillItem>
          <SkillItem>
            <SkillIcon>GraphQL</SkillIcon>
            <SkillText>API Development</SkillText>
          </SkillItem>
          <SkillItem>
            <SkillIcon>Rest APIs</SkillIcon>
            <SkillText>API Development</SkillText>
          </SkillItem>
          <SkillItem>
            <SkillIcon>Python</SkillIcon>
            <SkillText>Data Science</SkillText>
          </SkillItem>
        </SkillList>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
