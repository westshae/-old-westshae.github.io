import React from "react";

//Components
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import BlogGrid from "../components/BlogGrid"
import {Header} from "../components/TextStyles"



const Writing = () => {
    return(
        <Container>
            <Navigation page="writing"/>
            <Content>
                <Header/>
                <BlogGrid/>
            </Content>
        </Container>
    );
}

export default Writing;