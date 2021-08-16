//Package imports
import React from "react";
import styled from "styled-components"

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Footer from "../components/Footer";

const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const Header = styled.h1`
    color:#322759;
    text-align:center;
    font-size:2rem;
`
const Paragraph = styled.p`
    color:#322759;
    width:70%;
    font-size:1.25rem;

    text-align:center;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
`

const MainPage = () => {
    return(
        <Container>
            <Navigation/>
            <Content>
            <TextContainer>
                    <Header>A brief introduction</Header>
                    <Paragraph>
                        I'm a Software Engineering student studying at Victoria University of Wellington. I've been working on my own projects 
                        for a couple years now, and haven't slowed down my progress since then. I initially started programming in 2019, initially 
                        using Python through my original mentor at the time. Quickly I moved onto Java programming, as I've always been a big fan 
                        of Minecraft servers, so developed and ran a few servers of my own.
                    </Paragraph>
                    <Paragraph>
                        I spent a relatively long time developing these plugins, as I used Java to learn about a large amount of Java, but since then 
                        I've moved onto learning about web development. Initially I created a small blackjack game, but found quite a few limitations 
                        with the basic Javascript, so I decided to learn about a web framework, and decided on ReactJS.
                    </Paragraph>
                    <Paragraph>
                        Since the discovery of ReactJS, a majority of my personal projects have been connected to web development, and I've found 
                        one of the main philosophies for my programming, and that's all about accessibility. For all my projects, I want people to be 
                        able to use my work and projects without having to download anything, or take forever to connect to it.
                    </Paragraph>
                    <Paragraph>
                        I now believe my skills are at the point where I can begin to work on larger projects, and begin to work on projects with slightly 
                        more risk. For example, I've started to offer my services to various businesses, and I'm currently applying to various companies 
                        in regards to internships and future work possibilities, so contact me if you're interested in any of this.
                    </Paragraph>
                </TextContainer>
            </Content>
            <Footer/>

        </Container>
    );
}

export default MainPage;