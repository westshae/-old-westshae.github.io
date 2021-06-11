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
import Image from "../components/Image"

//Third-party component imports
import GitHubCalendar from "react-github-calendar";

const MainPage = () => {
    const theme = {
        background: 'transparent',
        text: '#f8f8ff',
        grade0: '#1e2230',
        
      };
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
                <GitHubCalendar username="westshae" theme={theme} blockSize={24} blockMargin={4} fontSize={20} showTotalCount={false} fullYear={false}/>
            </Content>
        </Container>
    );
}

export default MainPage;