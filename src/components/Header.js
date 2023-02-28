import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.header`
    height: 120px;
    width: 100%;
    background-color: #FB6B6B;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Img = styled.img`
    width: 52px;
    height: 60px;
`

const H1 = styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    transform: rotate(0.58deg); 
`


const Header = () => {
    return (
        <HeaderDiv>
            <Img src="./assets/logo.png"></Img>
            <H1>ZapRecall</H1>
        </HeaderDiv>
    );
};

export default Header;