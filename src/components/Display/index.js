import React, { useEffect } from "react";

import { DateTime } from "luxon";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Text, VStack } from "@chakra-ui/react";
import { animated, useSpring } from "react-spring";

function Display({ minutes = 0, seconds = 0 }) {
  const isRunning = useSelector((state) => state.timer.isRunning);

  const [style, api] = useSpring(() => ({ to: { fontWeight: 400 } }));

  useEffect(() => {
    api.start({
      to: { fontWeight: isRunning ? 700 : 400 },
    });
  }, [isRunning]);

  const formatedMinutes = DateTime.fromFormat(`${minutes}`, "m").toFormat("mm");
  const formatedSeconds = DateTime.fromFormat(`${seconds}`, "s").toFormat("ss");

  return (
    <VStack>
      <animated.div style={style}>
        <Text variant="display">{formatedMinutes}</Text>
        <Text variant="display">{formatedSeconds}</Text>
      </animated.div>
    </VStack>
  );
}

Display.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default Display;
