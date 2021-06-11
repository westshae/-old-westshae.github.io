
import React from "react";

//Text imports
import indexText from "../assets/shelf/indexText.js"

//Image imports
import pfp from "../assets/images/misc/pfp.jpg"

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Header from "../components/Header"
import Paragraph from "../components/Paragraph"
import TextWrapper from "../components/TextWrapper"
import Image from "../components/Image"


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
                    {/* <Image src={pfp} width="100em" right="10px" position="absolute"/> */}
                </TextWrapper>
            </Content>
        </Container>
    );
}

export default MainPage;