import React, { useEffect } from "react";

import { DateTime } from "luxon";
import useSound from "use-sound";
import { useTimer } from "react-timer-hook";
import { Container, HStack, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import Display from "components/Display";
import MenuButton from "components/MenuButton";
import PlayButton from "components/PlayButton";
import SkipButton from "components/SkipButton";
import StageLabel from "components/StageLabel";
import TitleUpdater from "components/TitleUpdater";
import longBreakEndSfx from "assets/sounds/long_break_end.m4a";
import longBreakStartSfx from "assets/sounds/long_break_start.m4a";
import shortBreakEndSfx from "assets/sounds/short_break_end.m4a";
import shortBreakStartSfx from "assets/sounds/short_break_start.m4a";
import startSfx from "assets/sounds/start.m4a";
import { nextStage, toggleRunning } from "store/slices/timerSlice";
import { notifyMe, requestNotifications } from "utils/notify";
import ThemeColorUpdater from "components/ThemeColorUpdater";

function App() {
  const dispatch = useDispatch();

  // Get app state
  const settings = useSelector((state) => state.settings);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);
  const prevStage = useSelector((state) => state.timer.prevStage);

  // Init sounds
  const [playShortBreakStart] = useSound(shortBreakStartSfx);
  const [playShortBreakEnd] = useSound(shortBreakEndSfx);
  const [playLongBreakStart] = useSound(longBreakStartSfx);
  const [playLongBreakEnd] = useSound(longBreakEndSfx);
  const [playStart] = useSound(startSfx);

  // Request notification permission on mount
  useEffect(() => {
    requestNotifications();
  }, []);

  // Handle pause and resume
  useEffect(() => {
    if (isRunning) {
      if (settings.sound.value) playStart();
      resume();
    } else {
      pause();
    }
  }, [isRunning]);

  // Handle timer stage updates
  useEffect(() => {
    let restartTime = 0;
    let notificationBody = "";
    let playSound = playStart;

    switch (stage) {
      default:
      case "POMO":
        restartTime = settings.pomoLength.value;
        notificationBody = "Time to focus!";
        switch (prevStage) {
          default:
          case "SHORT_BREAK":
            playSound = playShortBreakEnd;
            break;
          case "LONG_BREAK":
            playSound = playLongBreakEnd;
            break;
        }
        break;
      case "SHORT_BREAK":
        restartTime = settings.shortBreak.value;
        notificationBody = "Time for a short break!";
        playSound = playShortBreakStart;
        break;
      case "LONG_BREAK":
        restartTime = settings.longBreak.value;
        notificationBody = "Time for a long break!";
        playSound = playLongBreakStart;
        break;
    }

    if (isRunning) {
      if (settings.notify.value) {
        notifyMe("Pomo", { body: notificationBody, silent: true });
      }
      if (settings.sound.value) {
        playSound();
      }
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
      <ThemeColorUpdater />
      <TitleUpdater
        minutes={minutes}
        seconds={seconds}
        stage={stage}
        isRunning={isRunning}
      />
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

export default App;
