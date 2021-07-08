import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper,
        ServicesCard, ServicesIcon, ServicesH2,
    ServicesP } from '../elements/ServicesElements'


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>My Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Our Services</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                         voluptatibus.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Our Services</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                        voluptatibus.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Our Services</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                        voluptatibus.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
