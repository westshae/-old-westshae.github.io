//Package imports
import styled from "styled-components";

//Asset imports
import Triangles from "../assets/bg_bggenerator_com.jpg"

//Overall container for all components on the page, wraps around navbar and content
const Container = styled.div`
    background-color:#f8f8ff;
    background-image:url(${Triangles});
    display:flex;
    flex-direction:column;
    overflow:visible;
    height: 100%;
    width: 100%;

    /* Set the height to match that of the viewport. */
    height: 100vh;

    /* Set the width to match that of the viewport. */
    width: 100vw;

    /* Remove any browser-default margins. */
    margin: 0;
`



export default Container;