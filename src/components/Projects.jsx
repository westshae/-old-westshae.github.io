//Package imports
import styled from "styled-components";
import React from "react";

//Text imports
import ProjectList from "../assets/shelf/projectList"

//Component imports
import {Paragraph} from "./TextStyles"

//Text imports for projects
import comaltoya from "../assets/shelf/Projects/comaltoya"
import cargame from "../assets/shelf/Projects/cargame"
import easyeffects from "../assets/shelf/Projects/easyeffects"
import hardcorefactions from "../assets/shelf/Projects/hardcorefactions"
import javacalculator from "../assets/shelf/Projects/javacalculator"
import playerevents from "../assets/shelf/Projects/playerevents"
import pythoncalculator from "../assets/shelf/Projects/pythoncalculator"
import soundmanipulation from "../assets/shelf/Projects/soundmanipulation"
import objectremoval from "../assets/shelf/Projects/objectremoval"

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
            <Description/>
            <div>
                {props.react && <Image src={ReactLogo}/>}
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
                {props.python && <Image src={PythonLogo}/>}
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
                {ProjectList.map((p,i)=>(
                    <IndividualCard header={p.header} description={p.description} link={p.link}/>//Need to add image system via props
                ))}
                {/* <IndividualCard header={comaltoya.header} description={comaltoya.description} link={comaltoya.link} react css html javascript/>
                <IndividualCard header={objectremoval.header} description={objectremoval.description} link={objectremoval.link} cpp github linux vscode/> 
                <IndividualCard header={pythoncalculator.header} description={pythoncalculator.description} link={pythoncalculator.link} python vscode github/>
                <IndividualCard header={easyeffects.header} description={easyeffects.description} link={easyeffects.link}  intellij java github/>
                <IndividualCard header={hardcorefactions.header} description={hardcorefactions.description} link={hardcorefactions.link} java intellij github/>
                <IndividualCard header={cargame.header} description={cargame.description} link={cargame.link}  linux github python vscode/>
                <IndividualCard header={soundmanipulation.header} description={soundmanipulation.description} link={soundmanipulation.link} cpp github linux vscode/>
                <IndividualCard header={javacalculator.header} description={javacalculator.description} link={javacalculator.link} java intellij github/>
                <IndividualCard header={playerevents.header} description={playerevents.description} link={playerevents.link} java intellij github/> */}
            </Container>
            <Paragraph/>
        </div>
    )
}

export default Projects;