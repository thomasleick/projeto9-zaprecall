import React, { useState } from 'react';
import styled from 'styled-components';

const CardClosed = styled.div`
    width: 270px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 12.5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    
    @media (max-width: 330px) {
        width: calc(100vw - 60px)
    }
`
const CardOpened = styled.div`
    width: 270px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 12.5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    
    @media (max-width: 330px) {
        width: calc(100vw - 60px)
    }
`

const H1 = styled.h1`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
`

const Img = styled.img`
    width: 20px;
    height: 23px;
`

const Flashcard = (props) => {

    const { card, number } = props
    const [isOpen, setIsOpen] = useState(false)

    const openQuestion = () => {
        setIsOpen(true)
        console.log(card)
    }

    return (
        !isOpen ?
            <CardClosed>
                <H1>Pergunta {number + 1}</H1>
                <Img src="./assets/seta_play.png" alt="Abrir pergunta" onClick={openQuestion}></Img>
            </CardClosed>
        :
            <CardOpened></CardOpened>
    );
};

export default Flashcard;