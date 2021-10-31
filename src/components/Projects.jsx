//Package imports
import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

const CardContainer = styled.div`
    display:grid;
    grid-row-gap:2%;
    grid-column-gap:2%;
    grid-template-columns:1fr 1fr;
    //Mobile support
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        grid-template-columns:1fr;
        padding-bottom:10%;
    }
`

const CardStyle = styled.div`
    padding:3%;
    color:#322759;
    display:grid;
    border:solid 2px;
    //Mobile support
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        text-align:center;
    }
`

const Button = styled.button`
    background:transparent;
    color:#322759;
    border:none;
    font-size:1.5em;
    font-family:Helvetica;
    font-weight:bold;
    :hover{
        text-decoration:underline 2px;
    }
`
const Paragraph = styled.p`
    justify-content:center;
    align-items:center;
    margin-left:10%;
    margin-right:10%;
`

const openInNewTab = (url) =>{
    window.open(url, "_blank", "noopener");
}

const Card = (props) =>{
    return(
        <CardStyle>
            <Button onClick={() => openInNewTab(props.link)}>{props.name}</Button>
            <Paragraph>{props.description}</Paragraph>
        </CardStyle>
    )
}

const Projects = (props) =>{
    const [repos, setRepos] = useState([]);


    useEffect(()=>{
        // Line below used for development
        // axios.get("https://api.github.com/users/westshae/repos", {'headers' : {'Authorization': 'token ' + process.env.REACT_APP_API_TOKEN}})
        axios.get("https://api.github.com/users/westshae/repos")
        .then((response) => {
            console.log(response.data)
            setRepos(response.data);
            
        }).catch((error)=>{
            console.log(error.response)
        })
    }, [])
    
    return(
        <CardContainer>
            {
                repos.map((repo, index)=>{
                    if(repo.archived){return;}
                    if(props.language !== "others"){if(repo.language !== props.language){return;}}
                    else if(repo.language === "Java" || repo.language === "Python" || repo.language === "JavaScript" || repo.language === "TypeScript"){return;}
                    
                    return(<Card name={repo.name} description={repo.description} link={repo.html_url} key={index}/>)
                })
            }
        </CardContainer>
    )

    
}

export default Projects;