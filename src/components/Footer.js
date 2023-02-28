import React from 'react';
import styled from 'styled-components';


const FooterDiv = styled.footer`
    height: 70px;
    width: 100%;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`


const Footer = () => {
    return (
        <FooterDiv>
            <H1>0/4 CONCLUÍDOS</H1>
        </FooterDiv>
    );
};

export default Footer;