import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  color: #2e2e2e;
  padding: 20px;
  text-align: center;
`;

const SocialIconsContainer = styled.div`
  margin-bottom: 10px;
`;

const SocialIcon = styled.a`
  color: #2e2e2e;
  font-size: 20px;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #1e90ff;
  }
`;

const PoweredBy = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <SocialIcon href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://www.discord.com/" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </SocialIcon>
        <SocialIcon href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
      </SocialIconsContainer>
      <PoweredBy>Powered by Eric😎Atsu🔥</PoweredBy>
    </FooterContainer>
  );
};

export default Footer;
