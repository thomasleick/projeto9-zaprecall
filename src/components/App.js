import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import styled from "styled-components"

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

  @media(max-width: 375px) {
    width: 100vw;
  }
`

const App = () => {

  return (
    <AppDiv>
      <ViewPort>
        <Header />
        <Main />
        <Footer />
      </ViewPort>
    </AppDiv>
  );
}

export default App;
