import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    height: 100%;
    background: #FB6B6B;
    border-left: 1px solid #DBDBDB;
    border-top: 1px solid #DBDBDB;
    border-right: 1px solid #DBDBDB;
    border-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 136px;
    height: 161px;
    margin: 19px 0;
`

const H1 = styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    margin: 19px 0;
`

const Button = styled.button`
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 19px 0;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;
`

const Welcome = (props) => {

    const { setIsStarted } = props

    return (
        <Div>
            <Img src="./assets/logo.png"></Img>
            <H1>ZapRecall</H1>
            <Button onClick={() => setIsStarted(true)} data-test="start-btn">Iniciar ReCall!</Button>
        </Div>
    );
};

export default Welcome;