import styled, {css} from "styled-components";
import React from "react"

//Logo imports

import AmazonLogo from "../assets/images/logos/amazon.png"
import AndroidLogo from "../assets/images/logos/android.png"
import AngularLogo from "../assets/images/logos/angularjs.png"
import ApacheLogo from "../assets/images/logos/apache.png"
import AtomLogo from "../assets/images/logos/atom.png"
import BabelLogo from "../assets/images/logos/babel.png"
import CLogo from "../assets/images/logos/c.png"
import CSharpLogo from "../assets/images/logos/c#.png"
import CppLogo from "../assets/images/logos/cpp.png"
import CssLogo from "../assets/images/logos/css2.png"
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
import SlackLogo from "../assets/images/logos/slack.png"
import TypescriptLogo from "../assets/images/logos/typescript.png"
import VSLogo from "../assets/images/logos/vs.png"
import VSCodeLogo from "../assets/images/logos/vscode.png"



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

const Image = styled.img`
    height:4em;
    width:auto;
    padding-left:0.5%;
    padding-right:0.5%;
`;

const IconContainer = styled.div`
`;


function IndividualCard(props){
    return (
        <CardStyle>
            <Header href={props.link} target="_blank">{props.header}</Header>
            <Description>{props.description}</Description>
            <Description/>
            <IconContainer>
                {props.react && <Image src={ReactLogo}/>}
                {props.html && <Image src={Html5Logo}/>}
                {props.javascript && <Image src={JavascriptLogo}/>}
                {props.amazon && <Image src={AmazonLogo}/>}
                {props.android && <Image src={AndroidLogo}/>}
                {props.angular && <Image src={AngularLogo}/>}
                {props.apache && <Image src={ApacheLogo}/>}
                {props.atom && <Image src={AtomLogo}/>}
                {props.babel && <Image src={BabelLogo}/>}
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
                {props.slack && <Image src={SlackLogo}/>}
                {props.typescript && <Image src={TypescriptLogo}/>}
                {props.vs && <Image src={VSLogo}/>}
                {props.vscode && <Image src={VSCodeLogo}/>}
                {props.python && <Image src={PythonLogo}/>}
            </IconContainer>
        </CardStyle>
    )
    
}

export default IndividualCard;