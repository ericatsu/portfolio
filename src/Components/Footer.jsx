import './Styles/Footer.css'
import Github from '../assets/github.png';
import YouTube from '../assets/youtube.png';
import Instagram from '../assets/instagram.png';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import Facebook from '../assets/facebook.png';

const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
        <Container>
                    <FooterTitle>Contact</FooterTitle>
                    <FooterH2>Let's create your next experience together</FooterH2>
                    <FooterEmail>ekaatsu@st.ug.edu.gh</FooterEmail>
                    <FooterLInk to="/HireMe">LinkedIn</FooterLInk>
                    <FooterLInk to="/HireMe">LinkedIn</FooterLInk>
                    <FooterLInk to="/HireMe">LinkedIn</FooterLInk>
        </Container>
        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
