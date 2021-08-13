//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Projects from "../components/Projects"

const Python = () =>{
    return(
        <Container>
            <Navigation/>
            <Content>
                <h1>Python</h1>
                <Projects/>
            </Content>
        </Container>
    )
}

export default Python;