import React from 'react';
import styled from 'styled-components';


const FooterDiv = styled.footer`
    height: 57.5px;
    width: 100%;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
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
const Span = styled.img`

`

const Footer = (props) => {

    const { answers, answersCount, total, propsButton } = props;

    return (
        <FooterDiv data-test="footer">
            <H1>{answersCount}/{total} CONCLUÍDOS</H1>
            <div>{
                answers.map((answer, pos) => 
                    !answer ? 
                        "" 
                    : 
                        <Span 
                            src={propsButton[answer].src}
                            alt={propsButton[answer].alt}
                            data-test={propsButton[answer].dataTest}
                            key={`answer${pos}`}>
                        </Span>)
                }
            </div>
        </FooterDiv>
    );
};

export default Footer;