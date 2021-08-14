//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Projects from "../components/Projects"


const Javascript = () =>{
    return(
        <Container>
            <Navigation/>
            <Content>
                <h1>Javascript</h1>
                <Projects language="JavaScript"/>
            </Content>
        </Container>
    )
}

export default Javascript;