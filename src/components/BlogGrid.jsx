import React from "react";
import styled from "styled-components"

import IndividualCard from "../components/BlogCard"
import HorLine from "../components/HorLine"

//Text imports for blogs
import comaltoya from "../assets/shelf/Projects/comaltoya";
import cargame from "../assets/shelf/Projects/cargame"
import { Fragment } from "react";

const CardContainer = styled.div`
    background-color:#272C3D;
    height:100%;
    display:grid;
    grid-template-rows:1fr;
    grid-row-gap:1fr;
    padding-bottom:1%;
`

function getFileList(){
    var fs = require('fs');
    var blogs = fs.readdirSync("../assets/shelf/Projects");
    var blogList = [];
    alert("Test")
    blogs.forEach(element => {
        return(
            <p>{blogList}</p>
        )
        //imageList.push(imageObject)
    })
}

function copiedCode(){
    //https://medium.com/swlh/react-tips-rendering-lists-dynamic-components-and-default-props-77fe091c34c6
    const persons = [
        { firstName: "Jane", lastName: "Smith" },
        { firstName: "Alex", lastName: "Jones" },
        { firstName: "May", lastName: "Wong" }
      ];

    const Person = ({ firstName, lastName }) => (
        <div>
          {firstName} {lastName}
        </div>
    );

    return(
        <div>
            {persons.map((p, i)=>(
                <Person firstName={p.firstName} lastName={p.lastName} key={i}/>
            ))}
        </div>
    )
}




function CardGrid(){
    return(
        <div>
            {getFileList}
            {copiedCode()}
            <CardContainer>
                <IndividualCard header={comaltoya.header} date={comaltoya.date} description={comaltoya.description} blog={comaltoya.blog}/>
            </CardContainer>
            <HorLine/>
        </div>
    )
}

export default CardGrid;