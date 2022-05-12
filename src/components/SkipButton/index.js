import React from "react";

import { Button } from "@chakra-ui/react";
import { FastForward } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";

import { nextStage } from "store/slices/timerSlice";

function SkipButton() {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <Button
      variant="secondary"
      size="md"
      onClick={() => dispatch(nextStage(settings))}
    >
      <FastForward weight="fill" />
    </Button>
  );
}

export default SkipButton;
