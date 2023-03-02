import React, { useState } from 'react';
import styled from 'styled-components';

const CardClosed = styled.div`
    width: 270px;
    min-height: 35px;
    max-height: 35px;
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
    min-height: 101px;
    max-height: 101px;
    background: #FFFFD4;
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

    const { card, number, answersCount, setAnswersCount, answers, setAnswers, propsButton } = props
    const [isOpen, setIsOpen] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
    const [answer, setAnswer] = useState(0)

    const openQuestion = () => {
        setIsOpen(true)
    }

    const flipCard = () => {
        setIsFlipped(true)
    }

    const handleClickAnswer = (arg) => {
        setAnswer(arg)
        setIsOpen(false)
        
        const newAnswersCount = answersCount + 1
        setAnswersCount(newAnswersCount)

        const newAnswers = [...answers]
        newAnswers[number] = arg
        setAnswers(newAnswers)
    }

    return (
        !isOpen ?
            ( <CardClosed data-test="flashcard">
                <H1 answer={answer} data-test="flashcard-text">Pergunta {number + 1}</H1>
                <Play 
                    src={propsButton[answer].src} 
                    alt={propsButton[answer].alt} 
                    data-test={propsButton[answer].dataTest}
                    onClick={!answer ? openQuestion : undefined }>
                </Play>
            </CardClosed> )
        :
            !isFlipped ? 
                ( <CardOpened data-test="flashcard">
                    <Text data-test="flashcard-text">{card.question}</Text>
                    <Turn src="./assets/seta_virar.png" onClick={flipCard} data-test="turn-btn"></Turn>
                </CardOpened> )
            :
                ( <CardOpened data-test="flashcard">
                    <Text data-test="flashcard-text">{card.answer}</Text>
                    <Wrong onClick={() => handleClickAnswer(1)} data-test="no-btn">Não Lembrei</Wrong>
                    <Almost onClick={() => handleClickAnswer(2)} data-test="partial-btn">Quase não lembrei</Almost>
                    <Zap onClick={() => handleClickAnswer(3)} data-test="zap-btn">Zap!</Zap>
                </CardOpened> )
    );
};

export default Flashcard;