import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thing = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

const NewButton = styled.button`
    margin: 2rem;
    border-radius: 4px;
    justify-self: end;
`;

const CardSizeInput = styled.input`
    margin: 2rem;
    border-radius: 4px;
`;

const CardSizeInputLabel = styled.label`
    margin-top: auto;
    margin-bottom: auto;
`;

const BingoTitle = styled.h1`
    margin-right: auto;
    margin-left: 1rem;
`;

const BingoCardGenerator = (props) => {
    const [cardSizeInputValue, setCardSizeInputValue] = useState(5);


    return (
        <Thing>
            <NewButton onClick={() => {props.generateNewCardFunction(cardSizeInputValue);}}>Get New Card</NewButton>
            <CardSizeInput type="text" value={cardSizeInputValue} onChange={(ev) => {setCardSizeInputValue(ev.target.value);}} />
            <CardSizeInputLabel>New Card Size:</CardSizeInputLabel>
            <BingoTitle>Cheese Emporium Bingo</BingoTitle>
        </Thing>
    );
};

BingoCardGenerator.propTypes = {
    generateNewCardFunction: PropTypes.func.isRequired
};

export default BingoCardGenerator;