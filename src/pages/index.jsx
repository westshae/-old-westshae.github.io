import React from "react";

//Text imports
import indexText from "../assets/shelf/indexText.js"

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import {Header, Paragraph} from "../components/TextStyles"

//Third-party component imports
import GitHubCalendar from "react-github-calendar";

const MainPage = () => {
    const calendarTheme = {
        background: 'transparent',
        text: '#f8f8ff',
        grade0: '#1e2230',
      };
      
    return(
        <Container>
            <Navigation page="home"/>
            <Content>
                <Header>{indexText.header1}</Header>
                <Paragraph>{indexText.paragraph1}</Paragraph>
                <GitHubCalendar username="westshae" theme={calendarTheme} blockSize={24} blockMargin={4} fontSize={20} showTotalCount={false} fullYear={false}/>
                <Header>{indexText.header2}</Header>
                <Paragraph>{indexText.paragraph2}</Paragraph>
                <Header>{indexText.header3}</Header>
                <Paragraph>{indexText.paragraph3}</Paragraph>
            </Content>
        </Container>
    );
}

export default MainPage;