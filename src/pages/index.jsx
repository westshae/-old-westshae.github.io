//Package imports
import React from "react";
import styled from "styled-components";

//Component imports
import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Content from "../components/Content"

const MainPage = () => {
    return(
        <Container>
            <Navigation page="home"/>
            <Content>
                <h1>RESTART</h1>
            </Content>
        </Container>
    );
}

export default MainPage;