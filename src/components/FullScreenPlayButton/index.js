import React from "react";

import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { toggleRunning } from "store/slices/timerSlice";

function FullScreenPlayButton() {
  const dispatch = useDispatch();

  return (
    <Box
      onClick={() => dispatch(toggleRunning())}
      pos="absolute"
      w="100vw"
      h="100vh"
      cursor="pointer"
    />
  );
}

export default FullScreenPlayButton;
