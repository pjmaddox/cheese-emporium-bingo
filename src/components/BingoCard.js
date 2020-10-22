import React, { useEffect, useState } from 'react';
import BingoCell from "./BingoCell";
import styled, { css } from "styled-components";
import { setCookie } from "../utilities/Cookies";
import { wordsTrackingCookieName } from "../utilities/Constants";


const GridCellContainer = styled.div`
    ${props => css`
        display: grid;
        grid-template-columns: repeat(${props.cellSize}, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
        color: blue;
        margin-left: 20%;
        margin-right: 20%;
    `}
`;

const BingoCard = (props) => {
    
    const [cardState, setCardState] = useState(props.cardState);

    const updateState = (currentState, cardIndexToToggle) => {
        currentState[cardIndexToToggle].completed = !currentState[cardIndexToToggle].completed;
        window.localStorage.setItem(wordsTrackingCookieName, JSON.stringify(currentState));
        setCardState( [...currentState] );
    };

    var cells = cardState.map((x,i) => {
        return <BingoCell word={x.text} complete={x.completed} key={`card-${i}`} toggleDoneFunction={() => { updateState(cardState, i); }} />
    });
    
    return (
        <div>
            <GridCellContainer cellSize={props.cellSize}>
                {cells}
            </GridCellContainer>
        </div>
    );
};

export default BingoCard;