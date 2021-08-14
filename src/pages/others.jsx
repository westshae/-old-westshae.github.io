//Package imports
import styled from "styled-components"

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Projects from "../components/Projects"

const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const Header = styled.h1`
    color:#800000;
    text-align:center;
`
const Paragraph = styled.p`
    color:#800000;
    width:70%;

    text-align:center;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
`


const Others = () =>{
    return(
        <Container>
            <Navigation/>
            <Content>
            <TextContainer>
                    <Header>Others</Header>
                    <Paragraph>
                        This page will be jumbled compared to the other project pages, as I tend to use one of the three languages with their own tabs.
                        Particularly, this page will be home to some of my C++ learning materials, plus other projects such as my github readme.md, plus 
                        I plan to learn more about DevOp's and they'll most likely be kept here.
                    </Paragraph>
                </TextContainer>
                <Projects language="others"/>
            </Content>
        </Container>
    )
}

export default Others;