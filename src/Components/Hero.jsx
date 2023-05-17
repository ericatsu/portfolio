import React from 'react'
import { ButtonWrapper, CallButton, ContentWrapper, Description, HeroWrapper, HireMeButton, Image, ImageWrapper, Name, PhoneIcon, TextWrapper } from '../elements/HeroElements';
import passport  from '../assets/images/passport.jpg';

const Hero = () => {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <TextWrapper>
          <Name>Your Name</Name>
          <Description>
            I am a Web and Mobile developer passionate about creating amazing user experiences.
          </Description>
          <ButtonWrapper>
            <HireMeButton>Hire Me</HireMeButton>
            <CallButton>
              <PhoneIcon />
              Call
            </CallButton>
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <Image src={passport} alt="Eric Atsu" />
        </ImageWrapper>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;