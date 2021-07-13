//Package imports
import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

//Text imports
import indexText from "../assets/shelf/indexText.js"

//Image imports
import pfp from "../assets/images/misc/pfp.jpg"


//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import {Header, Paragraph} from "../components/TextStyles"
import {UL, LI} from "../components/List"

const CardContainer = styled.div`
    background-color:#272C3D;
    display:grid;
    grid-template-columns:3fr 2fr 2fr;
    grid-row-gap:0.25rem;
    
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const BorderedImage = styled.img`
    float:left;
    border-radius:8px;
`
const ContactCard = styled.div`
    padding-top:1em;
    margin:0.5%;
    padding-left:4%;
    border-radius:2px;
    height:100%;

    display:grid;
`;


const AboutMe = () => {
    return(
        <div>
            <Header>{indexText.aboutmeheader}</Header>
            <Paragraph>{indexText.aboutmeparagraph1}</Paragraph>
            <Paragraph>{indexText.aboutmeparagraph2}</Paragraph>
        </div>
    )
}

const Contact = () => {
    return(
            <ContactCard>
                <Header>My Official Contact Methods</Header>
                <UL>
                    <LI>Twitter: @altoyadev</LI>
                    <LI>Email: shaewest02@gmail.com</LI>
                    <LI>Discord: AuraBoom#2712</LI>
                </UL>
            </ContactCard>
    )
}

const Image = () =>{
    return(
        <ContactCard>
            <BorderedImage src={pfp} width="250em"/>
        </ContactCard>
    )
}

const Contributions = () => {
    const calendarTheme = {
        background: 'transparent',
        text: '#f8f8ff',
        grade0: '#1e2230',
      };

      return(
        <GitHubCalendar username="westshae" theme={calendarTheme} blockSize={24} blockMargin={4} fontSize={20} showTotalCount={false} fullYear={false}>
            <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      )
}
const SectionOne = () =>{
    return(
        <CardContainer>
            <AboutMe/>
            <Contact/>
            <Image/>
        </CardContainer>
    )
}

const MainPage = () => {
    return(
        <Container>
            <Navigation page="home"/>
            <Content>
                <SectionOne/>
                <Contributions/>
            </Content>
        </Container>
    );
}

export default MainPage;