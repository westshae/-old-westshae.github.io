
import React from "react";

//Text imports
import indexText from "../assets/shelf/indexText.js"

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Header from "../components/Header"
import Paragraph from "../components/Paragraph"
import TextWrapper from "../components/TextWrapper"


const MainPage = () => {
    return(
        <Container>
            <Navigation page="home"/>
            <Content>
                <TextWrapper>
                    <Header>{indexText.header}</Header>
                    <Paragraph>
                        {indexText.paragraph1}
                    </Paragraph>
                    <Paragraph>
                        {indexText.paragraph2}
                    </Paragraph>
                </TextWrapper>
            </Content>
        </Container>
    );
}

export default MainPage;