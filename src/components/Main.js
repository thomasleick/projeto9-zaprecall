import React from 'react';
import styled from 'styled-components';
import Flashcard from './Flashcard';

const MainDiv = styled.main`
    height: calc(100vh - 177.5px);
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    border: 0;
`

const Main = (props) => {
    const { decks, answersCount, setAnswersCount } = props;
    return (
        <MainDiv>
        {decks[0].cards.map((card, id) => 
            <Flashcard key={id} card={card} number={id} answersCount={answersCount} setAnswersCount={setAnswersCount}/>

        )}            
        </MainDiv>
    );
};

export default Main;