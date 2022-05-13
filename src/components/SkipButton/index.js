import React from "react";

import { FastForward } from "phosphor-react";
import { Button, useBreakpointValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { nextStage } from "store/slices/timerSlice";

function SkipButton() {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const size = useBreakpointValue(["sm", "md"]);

  return (
    <Button
      variant="secondary"
      size={size}
      onClick={() => dispatch(nextStage(settings))}
    >
      <FastForward weight="fill" />
    </Button>
  );
}

export default SkipButton;
