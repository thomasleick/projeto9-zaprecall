import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import decks from "../decks";
import Welcome from "./Welcome";
import styled, { keyframes } from "styled-components";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

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
  const welcomeRef = useRef(null);
  const mainRef = useRef(null);

  return (
    <AppDiv>
      <ViewPort>
        <CSSTransition  ref={welcomeRef}
          in={!isStarted}
          classNames="fade"
          timeout={500}
          unmountOnExit
          onExited={() => setIsMounted(true)}
        >
          <AnimatedWelcome ref={welcomeRef}>
            <Welcome setIsStarted={setIsStarted} />
          </AnimatedWelcome>
        </CSSTransition>
        <CSSTransition ref={mainRef}
          in={isStarted && isMounted}
          classNames="fade"
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <AnimatedWelcome ref={mainRef}>
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