import styled from "styled-components";
import {useHistory} from "react-router-dom";

import React from "react"

import Button from "../components/Button"

const StyledNavigation = styled.nav`
    background-color:#1e2230;
    border-bottom:0.5vh solid #1b1e2b;
    display:flex;
    height:6vh;
    flex-direction:row;
    
`

function Navigation(props){

    const history = useHistory();


    const indexRoute=()=> {
        let path = `index`;
        history.push(path);
    }

    const portfolioRoute=()=>{
        let path = `portfolio`;
        history.push(path);
    }

    const blogRoute=()=>{
        let path=`blog`;
        history.push(path);
    }

    const contactRoute=()=>{
        let path=`contact`;
        history.push(path);
    }

    return (
        <StyledNavigation>
            <Button reverse main bold onClick={indexRoute}>/dev/altoyadev/{props.page}/</Button>
            <Button main onClick={indexRoute}>Home</Button>
            <Button main onClick={portfolioRoute}>Portfolio</Button>
            <Button main onClick={blogRoute}>Blog</Button>
            <Button main onClick={contactRoute}>Contact</Button>
        </StyledNavigation>
    )
    
}

export default Navigation;