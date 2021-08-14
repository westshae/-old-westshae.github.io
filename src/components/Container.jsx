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
`



export default Container;