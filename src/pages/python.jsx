//Package imports
import styled from "styled-components"

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Projects from "../components/Projects"
import Footer from "../components/Footer";


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
    //Mobile support
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        width:100%;
        font-size:1.25rem;
    }
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
            <Footer/>
        </Container>
    )
}

export default Python;