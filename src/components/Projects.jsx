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
    grid-template-columns:3fr 2fr;
    grid-column-gap:3%;
    border:solid 2px;
`

const BasicDataContainer = styled.div`
    display:grid;
    grid-template-columns:1fr;
`

const Card = (props) =>{
    return(
        <CardStyle>
            <div>
                <h1>Repo name: {props.name}</h1>
                <p>Description: {props.description}</p>
            </div>

            <BasicDataContainer>
                {/* Note, results styled as "buttons" next to text */}
                <p>Last commit date: {props.lastCommit}</p>
                <p>Repo Link: {props.link}</p>
                <p>Commit amount: {props.commitCount}</p>
            </BasicDataContainer>
        </CardStyle>
    )
}

const Projects = () =>{
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
                    return(<Card name={repo.name} description={repo.description} key={index}/>)
                })
            }
        </CardContainer>
    )

    
}

export default Projects;