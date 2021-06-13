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
    ${props => props.right && css`
        margin-right:auto;
    `};
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
    const projectsRoute=()=>{history.push(`projects`);}

    return (
        <StyledNavigation>
            <MediaQuery query="(min-device-width: 480px)">
                <Button right onClick={indexRoute}>/dev/altoyadev/{props.page}/</Button>
            </MediaQuery>
            <Button onClick={indexRoute}>Home</Button>
            <Button onClick={projectsRoute}>Projects</Button>
        </StyledNavigation>
    )
    
}

export default Navigation;