import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg,
        HeroContent, HeroBtnWrapper,HeroH1,
        HeroP, ArrowForward, ArrowRight } from '../elements/HeroElements'
import Video from '../assets/video.mp4'
import { Button } from '../elements/ButtonElements'

const Hero = () => {
    const [hover, sethover] = useState(false)
    
    const onHover = () => {
        sethover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
             <VideoBg autoPlay loop muted  src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to my Page</HeroH1>
                <HeroP>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Consequatur quas similique, doloribus architecto voluptates at 
                    sapiente accusantium eius doloremque sit officiis. Dolorem perspiciatis, 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='HireMe' onMouseEnter={onHover} onMouseLeave={onHover}
                     primary='true' dark='true'
                    >
                        Hire Me {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
