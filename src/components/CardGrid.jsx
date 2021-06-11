import React from "react";

//Component imports
import IndividualCard from "./PortfolioCard"
import CardContainer from "./CardContainer"
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


function CardGrid(){
    return(
        <div>
            <CardContainer>
                <IndividualCard header={comaltoya.header} description={comaltoya.description} link={comaltoya.link} react css html javascript/>
                <IndividualCard header={objectremoval.header} description={objectremoval.description} link={objectremoval.link} cpp github linux vscode/> 
                <IndividualCard header={pythoncalculator.header} description={pythoncalculator.description} link={pythoncalculator.link} python vscode github/>
                <IndividualCard header={easyeffects.header} description={easyeffects.description} link={easyeffects.link}  intellij java github/>
                <IndividualCard header={hardcorefactions.header} description={hardcorefactions.description} link={hardcorefactions.link} java intellij github/>
                <IndividualCard header={cargame.header} description={cargame.description} link={cargame.link}  linux github python vscode/>
                <IndividualCard header={soundmanipulation.header} description={soundmanipulation.description} link={soundmanipulation.link} cpp github linux vscode/>
                <IndividualCard header={javacalculator.header} description={javacalculator.description} link={javacalculator.link} java intellij github/>
                <IndividualCard header={playerevents.header} description={playerevents.description} link={playerevents.link} java intellij github/>
            </CardContainer>
            <Paragraph/>
        </div>
    )
}

export default CardGrid;