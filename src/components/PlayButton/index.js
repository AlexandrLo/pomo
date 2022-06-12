import React from "react";

import { Button, VisuallyHidden, useBreakpointValue } from "@chakra-ui/react";
import { Pause, Play } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";

import { toggleRunning } from "store/slices/timerSlice";

function PlayButton() {
  const isRunning = useSelector((state) => state.timer.isRunning);
  const dispatch = useDispatch();
  const size = useBreakpointValue(["md", "lg"]);

  return (
    <Button
      variant="primary"
      size={size}
      onClick={() => dispatch(toggleRunning())}
    >
      {isRunning ? <Pause weight="fill" /> : <Play weight="fill" />}
      <VisuallyHidden>Play</VisuallyHidden>
    </Button>
  );
}

export default PlayButton;
