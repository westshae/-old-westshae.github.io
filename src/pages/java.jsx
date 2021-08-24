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


const Java = () =>{
    return(
        <Container>
            <Navigation/>
            <Content>
            <TextContainer>
                    <Header>Java</Header>
                    <Paragraph>
                        Java was the second language I learnt, after Python. This is where a lot of my initial learning begun, as this was the first
                        time completing projects without the help of my mentor at the time.
                    </Paragraph>
                    <Paragraph>
                        All these visible projects shown are Minecraft server plugins, which was my interest at the time. There are hidden projects,
                        which is required by Victoria University of Wellington which take up a large portion of my recent Java experience.
                    </Paragraph>
                </TextContainer>
                <Projects language="Java"/>
            </Content>
            <Footer/>
        </Container>
    )
}

export default Java;