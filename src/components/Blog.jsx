//Module imports
import React from "react";
import styled from "styled-components"

//Text imports
import BlogList from "../assets/shelf/blogList"

const CardStyle = styled.div`
    margin:0.5%;
    padding-left:2%;
    background-color:#1e2230;
    border-radius:2px;
    display:grid;
    :hover{
        transition-delay:0.5s;
        background-color:#1b1d25;
        -webkit-transition: background-color 0.2s ease-out;
        -moz-transition: background-color 0.2s ease-out;
        -o-transition: background-color 0.2s ease-out;
        -ms-transition: background-color 0.2s ease-out;
        transition: background-color 0.2s ease-out;
    }
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

function Card(props){
    return (
        <CardStyle>
            <Header href={props.link} target="_blank">{props.title}</Header>
            <Description>{props.readtime}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.date}</Description>
        </CardStyle>
    )
}

const Container = styled.div`
    background-color:#272C3D;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-row-gap:0.5%;
    padding-bottom:1%;
`

function Grid(){
    return(
        <Container>
            {BlogList.map((p, i)=>(
                <Card title={p.title} date={p.date} readtime={p.readtime} link={p.link}/>
            ))}
        </Container>
    )
}

export default Grid;