//Package imports
import styled from "styled-components"

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Projects from "../components/Projects"

const TextContainer = styled.div`

`

const Header = styled.h1`
    color:#800000;
`
const Paragraph = styled.p`
    color:#800000;
`

const Python = () =>{
    return(
        <Container>
            <Navigation/>
            <Content>
                <Header>Python</Header>
                <Projects language="Python"/>
            </Content>
        </Container>
    )
}

export default Python;