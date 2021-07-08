import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper,
        ServicesCard, ServicesIcon, ServicesH2,
    ServicesP } from '../elements/ServicesElements'
import webdev from '../assets/images/webdev.svg'
import appdev from '../assets/images/appdev.svg'
import cloud from '../assets/images/cloud.svg'
import other from '../assets/images/other.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>My Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={webdev}/>
                    <ServicesH2>Our Services</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                         voluptatibus.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={appdev} />
                    <ServicesH2>Our Services</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                        voluptatibus.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={cloud} />
                    <ServicesH2>Our Services</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                        voluptatibus.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={other} />
                    <ServicesH2>Our Services</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                        voluptatibus.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
