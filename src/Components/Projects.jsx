import React from 'react';
import {
  ProjectsSection,
  ProjectsContainer,
  Title,
  ProjectGrid,
  ProjectItem,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
} from '../elements/ProjectsElements';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://github.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://github.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      link: 'https://github.com/project3',
    },
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://github.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://github.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      link: 'https://github.com/project3',
    },
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://github.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://github.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      link: 'https://github.com/project3',
    },
  ];

  return (
    <ProjectsSection>
      <ProjectsContainer>
        <Title>Projects</Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ProjectItem>
          ))}
        </ProjectGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
