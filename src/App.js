import React from "react";

import { Box } from "@chakra-ui/react";

import Settings from "./components/Settings";
import Timer from "./components/Timer";

export default function App() {
  return (
    <Box position="relative">
      <Timer />
      <Box
        position="absolute"
        top={{ base: "auto", md: "1rem" }}
        bottom={{ base: "1rem", md: "auto" }}
        right="1rem"
      >
        <Settings />
      </Box>
    </Box>
  );
}
