//Package imports
import styled, {css} from "styled-components";
import {useHistory} from "react-router-dom";
import React from "react"

//Style for navigation buttons
const Button = styled.button`
    background:transparent;
    color:#800000;
    border:none;
    font-size:1.25em;
    font-family:Helvetica;
    :hover{
        text-decoration:underline 2px;
    }
`
//Style for navigation bar background
const StyledNavigation = styled.nav`
    border-bottom:2px solid #800000;
    display:grid;
    grid-template-columns:2fr 1fr 2fr;
    height:100%;
`

const Section = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2%;
    height:100%;
`

const Title = styled.button`
    font-size:1.5rem;
    background:transparent;
    color:#800000;
    border:none;
    font-weight:bold;
    padding-top:3%;
    padding-bottom:3%;
    :hover{
        text-decoration:underline 2px;
    }
`

//Opens new tab without security issues
const openInNewTab = (url) =>{
    window.open(url, "_blank", "noopener");
}

//Logic for navigation bar
const Navigation = () => {

    const history = useHistory();

    const indexRoute=()=> {history.push(`index`);}
    const pythonRoute=()=> {history.push(`python`)}
    const javaRoute=()=>{history.push(`java`)}
    const javascriptRoute=()=>{history.push(`javascript`)}
    const othersRoute=()=>{history.push(`others`)}

    return (
        <StyledNavigation>
            <Section>
                <Button onClick={() => openInNewTab("https://github.com/westshae")}>Github</Button>
                <Button onClick={() => openInNewTab("mailto:shaewest02@gmail.com")}>Email</Button>
                <Button onClick={() => openInNewTab("https://discord.com/users/223993583617835009")}>Discord</Button>
                <Button onClick={() => openInNewTab("https://twitter.com/altoyadev")}>Twitter</Button>
                <Button onClick={() => openInNewTab("https://www.linkedin.com/in/shae-west-83a91b215/")}>LinkedIn</Button>
            </Section>
            <Section>
                <Title onClick={indexRoute}>Shae West's Portfolio</Title>
            </Section>
            <Section>
                <Button onClick={javascriptRoute}>Javascript</Button>
                <Button onClick={pythonRoute}>Python</Button>
                <Button onClick={javaRoute}>Java</Button>
                <Button onClick={othersRoute}>Others</Button>
            </Section>
        </StyledNavigation>
    )
    
}

export default Navigation;