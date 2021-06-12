import styled from "styled-components";
import {useHistory} from "react-router-dom";

import React from "react"

import Button from "../components/Button"

const StyledNavigation = styled.nav`
    background-color:#1e2230;
    border-bottom:0.5vh solid #1b1e2b;
    display:flex;
    height:6vh;
    overflow:scroll;
    flex-direction:row;
    
`

function Navigation(props){

    const history = useHistory();


    const indexRoute=()=> {
        let path = `index`;
        history.push(path);
    }

    const programmingRoute=()=>{
        let path = `programming`;
        history.push(path);
    }

    const writingRoute=()=>{
        let path=`writing`;
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
            <Button main onClick={programmingRoute}>Programming</Button>
            <Button main onClick={writingRoute}>Writing</Button>
            <Button main onClick={contactRoute}>Contact</Button>
        </StyledNavigation>
    )
    
}

export default Navigation;