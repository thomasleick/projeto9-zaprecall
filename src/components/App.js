import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import decks from "../decks";
import Welcome from "./Welcome";
import styled from "styled-components";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip'

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Recursive", sans-serif, "Righteous", cursive;
  height: 100vh;
`;

const ViewPort = styled.div`
  border: 1px solid #dbdbdb;
  width: 375px;
  height: 100%;

  @media (max-width: 768px)  {
    width: 100vw;
  }
`;

const App = () => {
  const [isStarted, setIsStarted] = useState(false)
  const [answersCount, setAnswersCount] = useState(0)
  const [answers, setAnswers] = useState([])
  const [finish, setFinish] = useState(false)

  const propsButton = [
    { 
        name: "Unanswered", 
        src: "./assets/seta_play.png",
        alt: "Abrir Pergunta",
        dataTest: "play-btn"
    },
    { 
        name: "", 
        src: "./assets/icone_erro.png",
        alt: "Errou",
        dataTest: "no-icon"
    },
    { 
        name: "", 
        src: "./assets/icone_quase.png",
        alt: "Quase",
        dataTest: "partial-icon"
    },
    { 
        name: "", 
        src: "./assets/icone_certo.png",
        alt: "ZAP!",
        dataTest: "zap-icon"
    }
  ]

  if ((answersCount === decks[1].cards.length) && !finish)
    setFinish(true)

  return (
    <AppDiv>
      <ViewPort>
        <ReactCardFlip isFlipped={isStarted} flipDirection="vertical">
          <Welcome setIsStarted={setIsStarted} />
          <>
            <Header />
            <Main 
              decks={decks} 
              answersCount={answersCount} 
              setAnswersCount={setAnswersCount} 
              answers={answers} 
              setAnswers={setAnswers} 
              propsButton={propsButton} 
              finish={finish}
            />
            <Footer 
              answers={answers} 
              answersCount={answersCount} 
              total={decks[0].cards.length} 
              propsButton={propsButton} 
              finish={finish}
            />
          </>
        </ReactCardFlip>
      </ViewPort>
    </AppDiv>
    
  );
};

export default App;