import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled, { keyframes } from "styled-components";
import decks from "../decks";
import { useState } from "react";
import Welcome from "./Welcome";
import { CSSTransition } from "react-transition-group";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Recursive", sans-serif, "Righteous", cursive;
`;

const ViewPort = styled.div`
  border: 1px solid #dbdbdb;
  width: 375px;
  height: 100vh;

  @media (max-width: 375px) {
    width: 100vw;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(50%);
  }
`;

const AnimatedWelcome = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;

  &.fade-enter {
    opacity: 0;
    transform: translateX(-50%);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  }

  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.fade-exit-active {
    opacity: 0;
    transform: translateX(50%);
    animation: ${fadeOut} 0.5s ease-in-out forwards;
  }
`;

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  return (
    <AppDiv>
      <ViewPort>
        <CSSTransition
          in={!isStarted}
          classNames="fade"
          timeout={500}
          unmountOnExit
          onExited={() => setIsMounted(true)}
        >
          <AnimatedWelcome>
            <Welcome setIsStarted={setIsStarted} />
          </AnimatedWelcome>
        </CSSTransition>
        <CSSTransition
          in={isStarted && isMounted}
          classNames="fade"
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <AnimatedWelcome>
            <Header />
            <Main decks={decks} />
            <Footer total={decks[0].cards.length} />
          </AnimatedWelcome>
        </CSSTransition>
      </ViewPort>
    </AppDiv>
  );
};

export default App;