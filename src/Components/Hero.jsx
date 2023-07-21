import React from 'react'
import { ButtonWrapper, CallButton, ContentWrapper, Description, HeroWrapper, HireMeButton, Image, ImageWrapper, Name, PhoneIcon, TextWrapper } from '../elements/HeroElements';
import mypic  from '../assets/images/mypic.png';

const Hero = () => {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <TextWrapper>
          <Name>Eric Atsu</Name>
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
          <Image src={mypic} alt="Eric Atsu" />
        </ImageWrapper>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;