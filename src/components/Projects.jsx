//Package imports
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

const Card = () =>{
    return(
        <CardStyle>
            <div>
                <h1>Repo name</h1>
                <p>Description: Did you know that once upon a time there was lots of information here??</p>
            </div>

            <BasicDataContainer>
                {/* Note, results styled as "buttons" next to text */}
                <p>Last commit date</p>
                <p>Repo Link</p>
                <p>isArchived</p>
                <p>Commit amount</p>
            </BasicDataContainer>
        </CardStyle>
    )
}

const Projects = () =>{
    return(
        <CardContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </CardContainer>
    )
}

export default Projects;