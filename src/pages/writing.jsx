import React from "react";

//Components
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Blog from "../components/Blog"
import {Header} from "../components/TextStyles"



const Writing = () => {
    return(
        <Container>
            <Navigation page="writing"/>
            <Content>
                <Header/>
                <Blog/>
            </Content>
        </Container>
    );
}

export default Writing;