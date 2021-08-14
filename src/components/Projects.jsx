//Package imports
import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

const CardContainer = styled.div`
    display:grid;
    grid-row-gap:2%;
    grid-column-gap:2%;
    grid-template-columns:1fr 1fr;
`

const CardStyle = styled.div`
    padding:3%;
    color:#800000;
    display:grid;
    border:solid 2px;
`

const Button = styled.button`
    background:transparent;
    color:#800000;
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
        axios.get("https://api.github.com/users/westshae/repos", {'headers' : {'Authorization': 'token ' + process.env.REACT_APP_API_TOKEN}})
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
                    if(props.language != "others"){
                        if(repo.language != props.language){return;}
                    }else{
                        if(repo.language == "Java" || repo.language == "Python" || repo.language == "JavaScript"){return;}
                    }
                    return(<Card name={repo.name} description={repo.description} link={repo.html_url} key={index}/>)
                })
            }
        </CardContainer>
    )

    
}

export default Projects;