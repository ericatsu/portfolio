import { Button } from "react-scroll"
import { InfoContainer, InfoWrapper, InfoRow,
 Column1, TextWrapper, TopLine, Heading, Subtitle,
BtnWrap, Column2, ImgWrap, Img } from "../elements/AboutElements"

const About = () => {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>TopLine</TopLine>
                        <Heading>Heading</Heading>
                        <Subtitle>Subtitle</Subtitle>
                        <BtnWrap>
                            <Button to='Home'>Button</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                      <ImgWrap>
                      <Img />
                      </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default About
