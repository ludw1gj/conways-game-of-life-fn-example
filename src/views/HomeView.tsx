import { Container, Flex } from "@chakra-ui/react";
import GameOfLifeForm from "../components/GameOfLifeForm";

export interface GameOfLifeForm {
  numRows: number;
  numCols: number;
  framesPerSecond: number;
}

const HomeView = () => {
  return (
    <Flex className="App" direction="column">
      <Container marginTop="100px">
        <GameOfLifeForm />
      </Container>
    </Flex>
  );
};

export default HomeView;
