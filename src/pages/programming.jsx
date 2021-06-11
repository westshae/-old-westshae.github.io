import React from "react";

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import CardGrid from "../components/CardGrid"
import Paragraph from "../components/Paragraph"
import Header from "../components/Header"

//Text imports
import portfolioText from "../assets/shelf/portfolioText"



const Programming = () => {
    return(
        <Container>
            <Navigation page="programming"/>
            <Content>
                <Header>{portfolioText.header}</Header>
                <Paragraph>{portfolioText.paragraph1}</Paragraph>
                <Paragraph/>
                <CardGrid/>
            </Content>
        </Container>
    );
}

export default Programming;