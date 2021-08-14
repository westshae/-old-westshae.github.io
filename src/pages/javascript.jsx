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


const Javascript = () =>{
    return(
        <Container>
            <Navigation/>
            <Content>
            <TextContainer>
                    <Header>JavaScript</Header>
                    <Paragraph>
                        Javascript is quite-possibly my favourite programming language to date. With all my projects, I've always wanted to make them 
                        as accessible as I could, which often required designing them as a website.
                    </Paragraph>
                    <Paragraph>
                        After creating my initial projects using only HTML, CSS and Javascript, I moved into learning ReactJS, which has been my preferred 
                        web framework since late 2020. Since then I've created a few websites specifically front-end, and plan to push into back-end development 
                        in the near future.
                    </Paragraph>
                </TextContainer>
                <Projects language="JavaScript"/>
            </Content>
        </Container>
    )
}

export default Javascript;