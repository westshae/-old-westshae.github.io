//Package imports
import styled from "styled-components";
import MediaQuery from "react-responsive";

//CSS for footer
const StyledFooter = styled.div`
    height:5rem;
    background-color:transparent;
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    width:100vw;
    bottom: 0px;
    left: 0px;
    //Mobile
    @media only screen
    and (orientation: portrait)
    and (max-device-width: 480px){
        position:relative;
        bottom:auto;
        padding-top:5%;
        padding-bottom:5%;
    }
`

//Style for navigation buttons
const Button = styled.button`
    background:transparent;
    color: #322759 ;
    border:none;
    font-size:1.25em;
    font-family:Helvetica;
    :hover{
        text-decoration:underline 2px;
    }
    @media only screen
    and (max-device-width: 480px){
        gap:none;
        margin-left:auto;
        margin-right:auto;
        display:grid;
        /* grid-template-columns:repeat(5, 1fr); */
    }
`

const Section = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2%;
    height:100%;
    //Mobile
    @media only screen
    and (max-device-width: 480px){
        display:grid;
        grid-template-columns:repeat(4, 1fr);

    }
    
`

//Opens new tab without security issues
const openInNewTab = (url) =>{
    window.open(url, "_blank", "noopener");
}

//Component returned
const Footer = () =>{
    return(
        <StyledFooter>
            <MediaQuery maxWidth={480}>
                <Section>
                    <Button onClick={() => openInNewTab("https://github.com/westshae")}>Github</Button>
                    <Button onClick={() => openInNewTab("mailto:shaewest02@gmail.com")}>Email</Button>
                    <Button onClick={() => openInNewTab("https://discord.com/users/223993583617835009")}>Discord</Button>
                    <Button onClick={() => openInNewTab("https://www.linkedin.com/in/shae-west-83a91b215/")}>LinkedIn</Button>
                </Section>
            </MediaQuery>
        </StyledFooter>
    )
}

export default Footer;