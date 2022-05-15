import React, { useEffect } from "react";

import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { animated, useSpringRef, useTransition } from "react-spring";

import Chip from "./Chip";

function StageLabel() {
  const stage = useSelector((state) => state.timer.stage);

  const transRef = useSpringRef();
  const transitions = useTransition(stage, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate(-50%,0%)", zIndex: 0 },
    enter: { opacity: 1, transform: "translate(-50%,0%)", zIndex: 2 },
    leave: { opacity: 0, transform: "translate(-50%,-110%)", zIndex: 2 },
  });
  useEffect(() => {
    transRef.start();
  }, [stage]);

  return (
    <Box h="7rem" pt="3.5rem">
      {transitions((style, i) => {
        return (
          <animated.div
            style={{
              position: "absolute",
              ...style,
            }}
          >
            <Chip stage={i} />
          </animated.div>
        );
      })}
    </Box>
  );
}

export default StageLabel;
