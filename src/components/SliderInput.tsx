import {
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

export interface SliderInputProps {
  max: number;
  min: number;
  value: number;
  name: string;
  onChange: (value: number) => void;
}

const SliderInput: React.FC<SliderInputProps> = ({
  max,
  min,
  value,
  onChange,
  name,
}) => {
  return (
    <Flex>
      <Slider
        max={max}
        min={min}
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={onChange}
        name={name}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px" children={value} />
      </Slider>
    </Flex>
  );
};

export default SliderInput;
