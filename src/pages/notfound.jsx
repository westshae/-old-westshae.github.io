import React from "react";

//Components
import Button from "../components/Button"
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"



const NotFound = () => {
    return(
        <Container>
            <Navigation page="404"/>
            <Content>
                <Button underlined>underlined</Button>
            </Content>
        </Container>
    );
}

export default NotFound;