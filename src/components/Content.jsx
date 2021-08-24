//Package imports
import styled from "styled-components";

//Wraps all content on the page, excluding navbar
const Content = styled.div`
    margin-left:10%;
    margin-right:10%;
    margin-bottom:3%;
    background-clip:margin-box;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    //Mobile support
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        margin-left:none;
        margin-right:none;
    }

`

export default Content;