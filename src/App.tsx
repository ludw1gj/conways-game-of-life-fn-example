import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import HeaderBar from "./components/HeaderBar";
import { Header, Main } from "./StyledApp";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <HeaderBar />
      </Header>
      <Main>
        <AppRouter />
      </Main>
    </BrowserRouter>
  );
}

export default App;
