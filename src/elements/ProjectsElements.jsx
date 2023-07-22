import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

export const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 24px;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectItem = styled.div`
  background-color: #ffffff;
  padding: 24px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8px;
`;

export const ProjectDescription = styled.p`
  font-size: 18px;
  color: #777777;
  margin-bottom: 16px;
`;

export const ProjectLink = styled.a`
  font-size: 16px;
  color: #1e90ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


export const Card = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 0 auto 10px;
`;

export const RepoName = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;

  &:hover {
    color: #007bff;
  }
`;

export const Language = styled.span`
  font-size: 16px;
  color: #555;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #777;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
  justify-content: center;
  align-items: center;
`;