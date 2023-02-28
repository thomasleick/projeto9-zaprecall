import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import styled from "styled-components"
import decks from '../decks';
import { useState } from "react";
import Welcome from "./Welcome";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Recursive', sans-serif, 'Righteous', cursive;
`

const ViewPort = styled.div`
  border: 1px solid #DBDBDB;
  width: 375px;
  height: 100vh;

  @media(max-width: 375px) {
    width: 100vw;
  }
`

const App = () => {

  const [isStarted, setIsStarted] = useState(false)

  return (
    <AppDiv>
      <ViewPort>
        {isStarted ? 
          <>
            <Header />
            <Main decks={decks}/>
            <Footer total={decks[0].cards.length}/>
          </>
        :
        <Welcome setIsStarted={setIsStarted}/>
      }
      </ViewPort>
    </AppDiv>
  );
}

export default App;
