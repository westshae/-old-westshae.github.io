//Package imports
import styled from "styled-components";

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
        display:grid;
        height:10rem;
    }
`

//CSS for Footer text
const Paragraph = styled.p`
    text-align:center;
    margin:0.75rem;
`

//CSS for anchor text
const Anchor = styled.a`
    color:#f8f9fa;
    height:auto;
`

const Image = styled.img`
    //Desktop
    @media only screen 
    and (min-device-width: 1025px){
        :hover{
            opacity:0.7;
        }
    }
`

//Component returned
const Footer = () =>{
    return(
        <StyledFooter/>
    )
}

export default Footer;