//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Projects from "../components/Projects"


const Java = () =>{
    return(
        <Container>
            <Navigation/>
            <Content>
                <h1>Java</h1>
                <Projects language="Java"/>
            </Content>
        </Container>
    )
}

export default Java;