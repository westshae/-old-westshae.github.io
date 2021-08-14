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
    color:#322759;
    text-align:center;
`
const Paragraph = styled.p`
    color:#322759;
    width:70%;

    text-align:center;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
`

const Python = () =>{
    return(
        <Container>
            <Navigation/>
            <Content>
                <TextContainer>
                    <Header>Python</Header>
                    <Paragraph>
                        Python initially took the place of my first language, and due to most of those projects being created before I used git, 
                        they unfortunately haven't been saved.
                    </Paragraph>
                </TextContainer>
                <Projects language="Python"/>
            </Content>
        </Container>
    )
}

export default Python;