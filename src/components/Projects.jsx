//Package imports
import styled from "styled-components";
import React from "react";

//Text imports
import ProjectList from "../assets/shelf/projectList"

//Component imports
import {Paragraph} from "./TextStyles"

//Logo imports
import AndroidLogo from "../assets/images/logos/android.png"
import CLogo from "../assets/images/logos/c.png"
import CSharpLogo from "../assets/images/logos/c#.png"
import CppLogo from "../assets/images/logos/cpp.png"
import CssLogo from "../assets/images/logos/css.png"
import DockerLogo from "../assets/images/logos/docker.png"
import GitLogo from "../assets/images/logos/git.png"
import GithubLogo from "../assets/images/logos/github.png"
import GitlabLogo from "../assets/images/logos/gitlab.png"
import Html5Logo from "../assets/images/logos/html5.png"
import IntellijLogo from "../assets/images/logos/intellij.png"
import JavaLogo from "../assets/images/logos/java.png"
import JavascriptLogo from "../assets/images/logos/javascript.png"
import LinuxLogo from "../assets/images/logos/linux.png"
import PythonLogo from "../assets/images/logos/python.png"
import ReactLogo from "../assets/images/logos/react.png"
import TypescriptLogo from "../assets/images/logos/typescript.png"
import VSCodeLogo from "../assets/images/logos/vscode.png"



const CardStyle = styled.div`
    margin:0.5%;
    padding-left:4%;
    background-color:#1e2230;
    border-radius:2px;
    height:100%;
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

const Image = styled.img`
    height:4em;
    width:auto;
    padding-left:0.5%;
    padding-right:0.5%;
`;

function IndividualCard(props){
    return (
        <CardStyle>
            <Header href={props.link} target="_blank">{props.header}</Header>
            <Description>{props.description}</Description>
            <Description>Technologies used: {props.technologies}</Description>
            <Description/>
            <div>
                {props.images.map((element,i) => {
                    switch(element){
                        case "react":return <Image src={ReactLogo}/>
                        case "html":return <Image src={Html5Logo}/>
                        case "javascript":return <Image src={JavascriptLogo}/>
                        case "android":return <Image src={AndroidLogo}/>
                        case "c":return <Image src={CLogo}/>
                        case "csharp":return <Image src={CSharpLogo}/>
                        case "cpp":return <Image src={CppLogo}/>
                        case "css":return <Image src={CssLogo}/>
                        case "docker":return <Image src={DockerLogo}/>
                        case "git":return <Image src={GitLogo}/>
                        case "github":return <Image src={GithubLogo}/>
                        case "gitlab":return <Image src={GitlabLogo}/>
                        case "intellij":return <Image src={IntellijLogo}/>
                        case "java":return <Image src={JavaLogo}/>
                        case "linux":return <Image src={LinuxLogo}/>
                        case "typescript":return <Image src={TypescriptLogo}/>
                        case "vscode":return <Image src={VSCodeLogo}/>
                        case "python":return <Image src={PythonLogo}/>
                    }
                })}
                {/* {props.react && <Image src={ReactLogo}/>}
                {props.html && <Image src={Html5Logo}/>}
                {props.javascript && <Image src={JavascriptLogo}/>}
                {props.android && <Image src={AndroidLogo}/>}
                {props.c && <Image src={CLogo}/>}
                {props.csharp && <Image src={CSharpLogo}/>}
                {props.cpp && <Image src={CppLogo}/>}
                {props.css && <Image src={CssLogo}/>}
                {props.docker && <Image src={DockerLogo}/>}
                {props.git && <Image src={GitLogo}/>}
                {props.github && <Image src={GithubLogo}/>}
                {props.gitlab && <Image src={GitlabLogo}/>}
                {props.intellij && <Image src={IntellijLogo}/>}
                {props.java && <Image src={JavaLogo}/>}
                {props.linux && <Image src={LinuxLogo}/>}
                {props.typescript && <Image src={TypescriptLogo}/>}
                {props.vscode && <Image src={VSCodeLogo}/>}
                {props.python && <Image src={PythonLogo}/>} */}
            </div>
        </CardStyle>
    )
}


//Grid setup
const Container = styled.div`
    background-color:#272C3D;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-row-gap:0.25rem;
    
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
    }
`

function Projects(){
    return(
        <div>
            <Container>
                {ProjectList.map((element, i)=>(
                    <IndividualCard header={element.header} description={element.description} link={element.link} images={element.images} technologies={element.technologies}/>//Need to add image system via props
                ))}
            </Container>
            <Paragraph/>
        </div>
    )
}

export default Projects;