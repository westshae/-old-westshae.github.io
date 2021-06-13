//Package imports
import styled, {css} from "styled-components";

const Button = styled.button`

    ${props => props.reverse && css`
    margin-right:auto;
    `};
    ${props => props.bold && css`
    font-weight:bold;

    `}

    ${props => props.transparent && css`
        background:transparent;
        color:white;
        border-style: solid;
        border:2px solid transparent;
        text-align:center;
        border-radius: 2px;
        margin: 2px;
        padding: 10px;
        padding-top:5px;
        padding-bottom:5px;
        width:100px;
        height:40px;
        :hover{
            border: 2px solid white;
        }
    `};
    
    ${props => props.underlined && css`
        background: transparent;
        border-style: solid;
        border-radius: 2px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px solid transparent;
        color: #5252ed;
        margin: 0 1em;
        padding: 0.25em 1em;
        width:100px;
        height:40px;
        :hover{
            border-bottom: 2px solid #5252ed;
        }
    `};

    ${props => props.topbottom && css`
        background: transparent;
        border-style: solid;
        border-radius: 2px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: none;
        color: #5252ed;
        margin: 0 1em;
        padding: 0.25em 1em;
        width:100px;
        height:40px;
        :hover{
            border-top: 2px solid #5252ed;
            border-bottom: 2px solid #5252ed;
        }
    `};

    ${props => props.leftexpand && css`
        background: transparent;
        border-style: solid;
        border-radius: 2px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: none;
        color: #5252ed;
        margin: 4px 1em;
        padding: 0.25em 1em;
        transition:width 1s;
        width:100px;
        height:40px;
        padding-left:0.125em 1em;
        border-left:2px solid #5252ed;
        :hover{
            width:130px;
        }
    `};

    ${props => props.bottomexpand && css`
        background: transparent;
        border-style: solid;
        border-radius: 2px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: none;
        color: #5252ed;
        margin: 4px 1em;
        padding: 0.25em 1em;
        transition:width 1s;
        width:100px;
        height:25px;
        padding-left:0.125em;
        transition:border-bottom 1s;
        :hover{
            width:130px;
            border-bottom:2px solid #5252ed;
        }
    `};
    `

    export default Button;