import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.direction};
    margin-bottom: 12px;
`

const Img = styled.img`
    width: 23px;
    height: 23px;
`

    const H1 = styled.h1`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin: 12px 12px;
`

const P = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
`

const Finished = (props) => {

    const { answers } = props
    
    let result = { title: "", p: "", src: "", alt: ""}

    if (answers.every(answer => answer !== 1))
        result = { 
            title: "Parabéns!", 
            p: ["Você não esqueceu de", "nenhum flashcard!"],
            src: "./assets/gg.svg",
            alt: "GG"
        }
    else
        result = { 
            title: "Putz...", 
            p: ["Ainda faltam alguns...", "Mas não desanime!"],
            src: "./assets/bg.svg",
            alt: "BG"
        }


    return (
        <>
            <Div direction="column">
                <Div direction = "row">
                    <Img src={result.src} alt={result.src}/>
                    <H1>{result.title}</H1>
                </Div>
                <P>{result.p[0]}</P>
                <P>{result.p[1]}</P>
            </Div>  
        </>
    );
};

export default Finished;