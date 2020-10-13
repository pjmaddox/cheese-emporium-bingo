import React, { useEffect, useState } from 'react';
import styled, { css } from "styled-components";

const BingoCellDiv = styled.div`
    background-color: darkgrey;
    color: white;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: .7rem;
    -webkit-user-select: none; /* Chrome/Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    -o-user-select: none;
    user-select: none;
    margin: auto;
    
    // do something to scale the size based on view height and number of cells?
    ${props => css`
        width: 8vw;
        height: 8vw;
    `}
`;

const BingoParagraph = styled.p`
    ${props => css`
        ${props.completed? "text-decoration: line-through;" : "text-decoration: none;"}    
    `}
`;

const CrossOutSpan = styled.span`
    position: absolute;
    font-size: 7rem;
    color: red;
    text-decoration: none;
    font-weight:bold;
    margin-top: -.5rem;

    ${props => css`
        ${props.completed? "" : "display:none;"}
    `}
`;

const BingoCell = (props) => {
    return (
        <BingoCellDiv completed={props.complete} onClick={props.toggleDoneFunction}>
            <CrossOutSpan completed={props.complete}>X</CrossOutSpan>
            <BingoParagraph>{props.word}</BingoParagraph>
        </BingoCellDiv>
    );
};

export default BingoCell;