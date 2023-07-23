import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Avatar, Card, Description, ErrorMessage, Language, ProjectGrid, ProjectsContainer, ProjectsSection, RepoName, Title } from "../elements/ProjectsElements";


const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const accessToken = "GitHub Access Token";

  useEffect(() => {
    
    const fetchRepos = async () => {
      try {
        const response = await Axios.get(
          "https://api.github.com/users/ericatsu/repos",
          {
            headers: {
              Authorization: `token ${accessToken}`,
            },
          }
        );
        
        const repositories = response.data;
        repositories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        const recentRepos = repositories.slice(0, 6);
        setRepos(recentRepos);
        setErrorMessage("");
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setRepos([]); 
        setErrorMessage("Failed to fetch repositories. Please try again later.");
      }
    };

    fetchRepos();
  }, [accessToken]);

  return (
    <ProjectsSection>
      <ProjectsContainer>
      <Title>Projects</Title>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <ProjectGrid>
        {repos.map((repo) => (
          <Card key={repo.id}>
            <Avatar src={repo.owner.avatar_url} alt={`${repo.name} Avatar`} />
            <RepoName href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </RepoName>
            <Language>{repo.language}</Language>
            <Description>{repo.description}</Description>
          </Card>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;



