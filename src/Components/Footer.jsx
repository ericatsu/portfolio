import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
FooterLink, SocialMedia, SocialIcons, SocialMediaWrap,
SocialLogo, WebsiteRights, SocialIconLink } from '../elements/FooterElements';
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaGithub} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
        <FooterWrap>
        <FooterLinksContainer> 
            <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to="/HireMe">How I Work</FooterLink>
                            <FooterLink to="/HireMe">Testimonals</FooterLink>
                            <FooterLink to="/HireMe">Resume</FooterLink>
                            <FooterLink to="/HireMe">Partners</FooterLink>
                            <FooterLink to="/HireMe">Terms of Services</FooterLink>                        
                            </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Support</FooterLinkTitle>
                            <FooterLink to="/HireMe">Support Request</FooterLink>
                            <FooterLink to="/HireMe">Contact</FooterLink>
                            <FooterLink to="/HireMe">PayPal</FooterLink>
                        </FooterLinkItems>
            </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Me</FooterLinkTitle>
                            <FooterLink to="/HireMe">WhatsApp</FooterLink>
                            <FooterLink to="/HireMe">Telegram</FooterLink>
                            <FooterLink to="/HireMe">Mail</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/HireMe">LinkedIn</FooterLink>
                            <FooterLink to="/HireMe">GitHub</FooterLink>
                            <FooterLink to="/HireMe">Twitter</FooterLink>
                            <FooterLink to="/HireMe">YouTube</FooterLink>
                            <FooterLink to="/HireMe">Instagram</FooterLink>
                            <FooterLink to="/HireMe">Twitch</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    lester
                </SocialLogo>
                <WebsiteRights>lester © {new Date().getFullYear()}
                  All Rights Reserved.</WebsiteRights>
                <SocialIcons>
                        <SocialIconLink href='//www.linkedin.com/in/eric-atsu-4065681b4/' target="_blank" aria-label="LinkedIn">
                      <FaLinkedin />
                  </SocialIconLink>
                        <SocialIconLink href='//www.github.com/ericatsu' target="_blank" aria-label="GitHub">
                      <FaGithub />
                  </SocialIconLink>
                        <SocialIconLink href='//www.twitter.com/1LeS_Ter' target="_blank" aria-label="Twitter">
                      <FaTwitter />
                  </SocialIconLink>
                        <SocialIconLink href='//www.youtube.com/channel/UCZvhEk5BETiadTJY4CdxIIQ' target="_blank" aria-label="YouTube">
                      <FaYoutube />
                  </SocialIconLink>
                        <SocialIconLink href='https://t.co/GpR3XOwvMC?amp=1' target="_blank" aria-label="Instagram">
                      <FaInstagram />
                  </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
