import { Flex, Heading, Box, Button, Spacer, chakra } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const StyledFlexHeader = chakra(Flex, {
  baseStyle: {
    minWidth: "max-content",
    alignItems: "center",
    gap: "2",
    border: "1px",
    borderColor: "gray.200",
    padding: "5px",
    justify: "center",
  },
});

const StyledBackButton = () => (
  <Link to="/" style={{ flex: "1" }}>
    <Button marginLeft="20px">Back</Button>
  </Link>
);

const HeaderBar = () => {
  const location = useLocation();
  const showBackBtn = location.pathname !== "/";
  const backBtn = showBackBtn ? <StyledBackButton /> : <Spacer />;

  return (
    <StyledFlexHeader>
      {backBtn}
      <Box p="2">
        <Heading size="md">Conway's Game of Life</Heading>
      </Box>
      <Spacer />
    </StyledFlexHeader>
  );
};

export default HeaderBar;
