import styled, {css} from "styled-components";
import React from "react"
import HorLine from "./HorLine";



const CardStyle = styled.div`
    margin:0.5%;
    padding-left:4%;
    background-color:#1e2230;
    border-radius:2px;
    height:100%;

    display:grid;
    :active{
    }
    :hover{
        transition-delay:0.5s;
        background-color:#1b1d25;
        -webkit-transition: background-color 0.2s ease-out;
        -moz-transition: background-color 0.2s ease-out;
        -o-transition: background-color 0.2s ease-out;
        -ms-transition: background-color 0.2s ease-out;
        transition: background-color 0.2s ease-out;
    }
    ${props => props.hide && css`

    `};
    
`;

const Header = styled.a`
    color:#f8f8ff;
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    text-decoration:none;
    :hover{
        text-decoration:underline;
    }
`;

const Description = styled.p`
    color: #f8f8ff;
    display:-webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical; 
    overflow:hidden;
    text-overflow:ellipsis;
    padding-right:6%;
`;


function IndividualCard(props){

    return (
        <CardStyle>
            <Header href={props.link} target="_blank">{props.header}</Header>
            <Description>{props.description}</Description>
            <Description/>
        </CardStyle>
    )
    
}

export default IndividualCard;