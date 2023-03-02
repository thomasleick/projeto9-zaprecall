import React, { useState } from 'react';
import styled from 'styled-components';

const CardClosed = styled.div`
    width: 270px;
    height: 65px;
    resize: none;
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
    position: relative;
    width: 270px;
    min-height: 131px;
    max-height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 12.5px 0;
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
    color: ${props => {
        if (!props.answer)
            return "#333333"
        if (props.answer === 1)
            return "#FF3030"
        if (props.answer === 2)
            return "#FF922E"
        if (props.answer === 3)
            return "#2FBE34"
        return "black"
    }};
    text-decoration: ${props => !props.answer ? "none" : "line-through"}
`

const Play = styled.img`
    width: 20px;
    height: 23px;
`
const Turn = styled.img`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 20px;
    color: #333333;
`

const Text = styled.h1`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`

const Wrong = styled.button`
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`
const Almost = styled.button`
    position: absolute;
    bottom: 10px;
    left: calc(50% - 42.585px);
    width: 85.17px;
    height: 37.17px;
    background: #FF922E;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`

const Zap = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 85.17px;
    height: 37.17px;
    background: #2FBE34;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`


const Flashcard = (props) => {

    const { card, number } = props
    const [isOpen, setIsOpen] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
    const [answer, setAnswer] = useState(0)

    const openQuestion = () => {
        setIsOpen(true)
    }

    const flipCard = () => {
        setIsFlipped(true)
    }

    const imgsButton = [
        "./assets/seta_play.png",
        "./assets/icone_erro.png",
        "./assets/icone_quase.png",
        "./assets/icone_certo.png"
    ]

    const handleClickAnswer = (arg) => {
        setAnswer(arg)
        setIsOpen(false)
    }

    return (
        !isOpen ?
            ( <CardClosed>
                <H1 answer={answer}>Pergunta {number + 1}</H1>
                <Play src={imgsButton[answer]} alt="Abrir pergunta" onClick={!answer ? openQuestion : undefined }></Play>
            </CardClosed> )
        :
            !isFlipped ? 
                ( <CardOpened>
                    <Text>{card.question}</Text>
                    <Turn src="./assets/seta_virar.png" onClick={flipCard}></Turn>
                </CardOpened> )
            :
                ( <CardOpened>
                    <Text>{card.answer}</Text>
                    <Wrong onClick={() => handleClickAnswer(1)}>Não Lembrei</Wrong>
                    <Almost onClick={() => handleClickAnswer(2)}>Quase não lembrei</Almost>
                    <Zap onClick={() => handleClickAnswer(3)}>Zap!</Zap>
                </CardOpened> )
    );
};

export default Flashcard;