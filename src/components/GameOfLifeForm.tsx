import { FormLabel, Button, chakra } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import SliderInput from "./SliderInput";

const StyledForm = chakra("form", {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
});

const GameOfLifeForm = () => {
  const [numRows, setNumRows] = useState<number>(50);
  const [numCols, setNumCols] = useState<number>(50);
  const [framesPerSecond, setFramesPerSecond] = useState<number>(10);
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/game-of-life", { state: { numRows, numCols, framesPerSecond } });
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormLabel>Number of Rows</FormLabel>
      <SliderInput
        max={100}
        min={10}
        value={numRows}
        name="numRows"
        onChange={(value) => setNumRows(value)}
      />
      <FormLabel>Number of Columns</FormLabel>
      <SliderInput
        max={100}
        min={10}
        value={numCols}
        name="numCols"
        onChange={(value) => setNumCols(value)}
      />
      <FormLabel>Frames Per Seconds</FormLabel>
      <SliderInput
        max={60}
        min={1}
        value={framesPerSecond}
        name="framesPerSecond"
        onChange={(value) => setFramesPerSecond(value)}
      />
      <Button type="submit" marginTop="20px">
        Create Grid
      </Button>
    </StyledForm>
  );
};

export default GameOfLifeForm;
