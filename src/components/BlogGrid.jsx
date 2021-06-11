//Module imports
import React from "react";
import styled from "styled-components"

//Text imports
import BlogList from "../assets/shelf/blogList"

//Component imports
import IndividualCard from "../components/BlogCard"

const CardContainer = styled.div`
    background-color:#272C3D;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-row-gap:0.5%;

    padding-bottom:1%;
`

function CardGrid(){
    BlogList.forEach(element => {
        console.log(element)
    });
    return(
        <CardContainer>
            {BlogList.map((p, i)=>(
                <IndividualCard title={p.title} date={p.date} readtime={p.readtime} link={p.link}/>
            ))}
        </CardContainer>
    )
}

export default CardGrid;