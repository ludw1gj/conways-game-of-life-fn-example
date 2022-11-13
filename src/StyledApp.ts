import { chakra } from "@chakra-ui/react";

const headerHeight = "52px";

export const Header = chakra("header", {
  baseStyle: {
    display: "block",
    position: "sticky",
    left: "0",
    right: "0",
    top: "0",
    backgroundColor: "white",
    zIndex: "3",
    height: headerHeight,
  },
});

export const Main = chakra("main", {
  baseStyle: {
    height: `calc(100vh - ${headerHeight})`,
    width: "100%",
    overflowX: "auto",
  },
});
