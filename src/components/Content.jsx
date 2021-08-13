//Package imports
import styled from "styled-components";

//Wraps all content on the page, excluding navbar
const Content = styled.div`
    margin-left:10%;
    margin-right:10%;
    margin-bottom:3%;
    background-clip:margin-box;
    background-color:#f8f8ff;
    display:flex;
    flex-direction:column;
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        margin-left:1rem;
        margin-right:1rem;
    }

`

export default Content;