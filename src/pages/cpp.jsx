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


const Cpp = () =>{
    return(
        <Container>
            <Navigation/>
            <Content>
            <TextContainer>
                    <Header>C++</Header>
                    <Paragraph>
                        C++ is a language I've been learning while studying at Victoria University of Wellington, and have done 2 mini projects outside of university.
                        These projects so far having been the Fibonacci sequence & conway's game of life in the terminal. More are to come.
                    </Paragraph>
                </TextContainer>
                <Projects language="C++"/>
                <Projects language="C"/>

            </Content>
            <Footer/>
        </Container>
    )
}

export default Cpp;