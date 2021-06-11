//Module imports
import React from "react";
import styled from "styled-components"

//Component imports
import IndividualCard from "../components/BlogCard"

const CardContainer = styled.div`
    background-color:#272C3D;
    height:100%;
    display:grid;
    grid-template-rows:1fr;
    grid-row-gap:0.5%;

    padding-bottom:1%;
`

function CardGrid(){
    const list = [
        {header: "Header", date: "00/00/2000", description: "lorem ipsum", blog: "Blog"},
        {header: "Header", date: "00/00/2000", description: "lorem ipsum", blog: "Blog"},
        {header: "Header", date: "00/00/2000", description: "lorem ipsum", blog: "Blog"},
        {header: "Header", date: "00/00/2000", description: "lorem ipsum", blog: "Blog"},
        {header: "Header", date: "00/00/2000", description: "lorem ipsum", blog: "Blog"},
        {header: "Header", date: "00/00/2000", description: "lorem ipsum", blog: "Blog"},
        {header: "Header", date: "00/00/2000", description: "lorem ipsum", blog: "Blog"},
        {header: "Header", date: "00/00/2000", description: "lorem ipsum", blog: "Blog"},
        {header: "Header", date: "00/00/2000", description: "lorem ipsum", blog: "Blog"}
    ]
    return(
        <CardContainer>
            {list.map((p, i)=>(
                <IndividualCard header={p.header} date={p.date} description={p.description} blog={p.blog}/>
            ))}
        </CardContainer>
    )
}

export default CardGrid;