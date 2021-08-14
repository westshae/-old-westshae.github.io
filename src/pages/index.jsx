//Package imports
import React from "react";

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"

const MainPage = () => {
    return(
        <Container>
            <Navigation/>
            <Content>
                <h1>Index</h1>
            </Content>
        </Container>
    );
}

export default MainPage;