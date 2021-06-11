import React from "react";
import styled from "styled-components"

import pfp from "../assets/images/misc/pfp.jpg"

//Components
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Header from "../components/Header"
import {UL, LI} from "../components/List"

const ContactContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-row-gap:0.5%;
    padding-bottom:1%;
`

const ContactCard = styled.div`
    padding-top:1em;
    margin:0.5%;
    padding-left:4%;
    border-radius:2px;
    height:100%;

    display:grid;
`;

const BorderedImage = styled.img`
    float:left;
    border-radius:8px;
`


const Contact = () => {
    return(
        <Container>
            <Navigation page="Contact"/>
            <Content>
                <ContactContainer>
                    <ContactCard>
                        <Header>My Official Contact Methods</Header>
                        <UL>
                            <LI>Twitter: @altoyadev</LI>
                            <LI>Instagram: humanity.is.great</LI>
                            <LI>Medium: shaewest02</LI>
                            <LI>Email: shaewest02@gmail.com</LI>
                            <LI>Discord: AuraBoom#2712</LI>
                        </UL>
                    </ContactCard>
                    <ContactCard>
                        <BorderedImage src={pfp} width="250em"/>
                    </ContactCard>
                </ContactContainer>
            </Content>
        </Container>
    );
}

export default Contact;