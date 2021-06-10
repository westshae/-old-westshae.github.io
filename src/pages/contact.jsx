import React from "react";

//Components
import Button from "../components/Button"
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"



const Contact = () => {
    return(
        <Container>
            <Navigation page="Contact"/>
            <Content>
                <Button underlined>underlined</Button>
            </Content>
        </Container>
    );
}

export default Contact;