import React from "react";

//Components
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import BlogGrid from "../components/BlogGrid"
import Header from "../components/Header"



const Blog = () => {
    return(
        <Container>
            <Navigation page="blog"/>
            <Content>
                <Header/>
                <BlogGrid/>
            </Content>
        </Container>
    );
}

export default Blog;