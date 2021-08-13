//Package imports
import styled, {css} from "styled-components";
import {useHistory} from "react-router-dom";
import MediaQuery from "react-responsive";
import React from "react"

//Style for navigation buttons
const Button = styled.button`
    background:transparent;
    color:#f8f8ff;
    border:none;
    height:3rem;
    font-size:1.25em;
    font-family:Helvetica;
    :hover{
        background-color: #181b27;
    }
`
//Style for navigation bar background
const StyledNavigation = styled.nav`
    background-color:#1e2230;
    border-bottom:0.25rem solid #1b1e2b;
    display:flex;
    height:3rem;
`

//Logic for navigation bar
function Navigation(props){

    const history = useHistory();

    const indexRoute=()=> {history.push(`index`);}

    return (
        <StyledNavigation>
            <Button onClick={indexRoute}>Home</Button>
        </StyledNavigation>
    )
    
}

export default Navigation;