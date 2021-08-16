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

//Component returned
const Footer = () =>{
    return(
        <StyledFooter/>
    )
}

export default Footer;