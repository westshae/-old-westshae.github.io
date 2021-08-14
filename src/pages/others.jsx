//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Projects from "../components/Projects"


const Others = () =>{
    return(
        <Container>
            <Navigation/>
            <Content>
                <h1>Others</h1>
                <Projects language="others"/>
            </Content>
        </Container>
    )
}

export default Others;