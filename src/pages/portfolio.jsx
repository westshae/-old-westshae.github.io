import React from "react";

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import CardGrid from "../components/PortfolioGrid"
import TextWrapper from "../components/TextWrapper"
import Header from "../components/Header"
import Paragraph from "../components/Paragraph"

//Text imports
import portfolioText from "../assets/shelf/portfolioText"



const Portfolio = () => {
    return(
        <Container>
            <Navigation page="portfolio"/>
            <Content>
                <Paragraph/>
                <CardGrid/>
            </Content>
        </Container>
    );
}

export default Portfolio;