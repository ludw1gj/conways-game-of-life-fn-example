import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import { ChakraProvider } from "@chakra-ui/react";
import HeaderBar from "./components/HeaderBar";
import { Header, Main } from "./StyledApp";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header>
          <HeaderBar />
        </Header>
        <Main>
          <AppRouter />
        </Main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
