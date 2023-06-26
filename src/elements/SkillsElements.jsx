import styled from 'styled-components';

export const SkillsSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

export const SkillsContainer = styled.div`
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

export const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
`;

export const SkillIcon = styled.span`
  font-size: 24px;
  color: #333333;
  margin-right: 8px;
`;

export const SkillText = styled.span`
  font-size: 18px;
  color: #777777;
`;
