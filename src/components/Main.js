import React from 'react';
import styled from 'styled-components';
import Flashcard from './Flashcard';

const MainDiv = styled.main`
    height: ${props => !props.finish ? "calc(100vh - 190px)" : "calc(100vh - 291px)"};
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    border: 0;
`

const Main = (props) => {
    const { decks, answersCount, setAnswersCount, answers, setAnswers, propsButton, finish } = props;

    return (
        <MainDiv finish={finish} key="main">
        {decks[0].cards.map((card, id) => 
            <Flashcard 
                key={id} 
                card={card} 
                number={id} 
                answersCount={answersCount} 
                setAnswersCount={setAnswersCount}
                answers={answers}
                setAnswers={setAnswers}
                propsButton={propsButton}
            />

        )}            
        </MainDiv>
        
    );
};

export default Main;