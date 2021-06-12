import styled, {css} from "styled-components";
import {useHistory} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

import React from "react"

const NavButton = styled.button`
    background:transparent;
    color:#f8f8ff;
    border:none;
    text-align:center;
    padding: 10px;
    height:3rem;
    font-size:20px;
    font-family:Helvetica;
    ${props => props.reverse && css`
        margin-right:auto;
    `};
    :hover{
        background-color: #181b27;
    }
    :active{
        background-color:#1b1e2b;
    }
`

const StyledNavigation = styled.nav`
    background-color:#1e2230;
    border-bottom:0.5vh solid #1b1e2b;
    display:flex;
    height:3rem;
    /* overflow:scroll; */
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

    const isMobile = useMediaQuery({ query: "max-device-width: 480px"});

    return (
        <StyledNavigation>
            {isMobile && <NavButton reverse main bold onClick={indexRoute}>/dev/altoyadev/{props.page}/</NavButton>}
            <NavButton main onClick={indexRoute}>Home</NavButton>
            <NavButton main onClick={programmingRoute}>Programming</NavButton>
            <NavButton main onClick={writingRoute}>Writing</NavButton>
            <NavButton main onClick={contactRoute}>Contact</NavButton>
        </StyledNavigation>
    )
    
}

export default Navigation;