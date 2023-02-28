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
  max-width: 375px;
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
