import React, { useEffect } from "react";

import { DateTime } from "luxon";
import { useTimer } from "react-timer-hook";
import { Container, HStack, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import Display from "components/Display";
import MenuButton from "components/MenuButton";
import PlayButton from "components/PlayButton";
import SkipButton from "components/SkipButton";
import StageLabel from "components/StageLabel";
import TitleDisplay from "components/TitleDisplay";

import { nextStage, toggleRunning } from "store/slices/timerSlice";

function Timer() {
  const dispatch = useDispatch();

  // Get app state
  const settings = useSelector((state) => state.settings);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);

  // Handle pause and resume
  useEffect(() => {
    if (isRunning) {
      resume();
    } else {
      pause();
    }
  }, [isRunning]);

  // Handle timer stage updates
  useEffect(() => {
    let restartTime = 0;

    switch (stage) {
      default:
      case "POMO":
        restartTime = settings.pomoLength.value;
        break;
      case "SHORT_BREAK":
        restartTime = settings.shortBreak.value;
        break;
      case "LONG_BREAK":
        restartTime = settings.longBreak.value;
        break;
    }

    if (isRunning) {
      if (!settings.autoResume.value) {
        dispatch(toggleRunning());
      }
      setTimeout(() => {
        restart(
          DateTime.now().plus({ minutes: restartTime }),
          settings.autoResume.value,
        );
      }, 100);
    } else {
      restart(DateTime.now().plus({ minutes: restartTime }), false);
    }
  }, [stage]);

  // Init timer
  const { seconds, minutes, pause, resume, restart } = useTimer({
    expiryTimestamp: DateTime.now(),
    onExpire: () => dispatch(nextStage(settings)),
  });

  return (
    <Container>
      <TitleDisplay minutes={minutes} seconds={seconds} />
      <VStack
        align="center"
        justify="center"
        minH="100vh"
        p={["1rem", "1.5rem"]}
        spacing={["1rem", "2rem"]}
      >
        <StageLabel />
        <Display minutes={minutes} seconds={seconds} />
        <HStack pb="3.5rem">
          <MenuButton />
          <PlayButton />
          <SkipButton />
        </HStack>
      </VStack>
    </Container>
  );
}

export default Timer;
