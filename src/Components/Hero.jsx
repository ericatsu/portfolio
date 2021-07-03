import React from 'react'
import { HeroContainer, HeroBg, VideoBg } from '../elements/HeroElements'
import Video from '../assets/video.mp4'

const Hero = () => {
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
                    porro officia, reprehenderit, aperiam incidunt eum ex ratione 
                    distinctio odio labore ipsa repudiandae. Sint veniam nulla, 
                    nostrum esse laborum asperiores alias commodi perferendis voluptatem. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='HireMe'>
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
