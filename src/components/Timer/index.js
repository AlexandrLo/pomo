import React, { useState, useEffect } from "react";
import { Text, Container, VStack, HStack, Button } from "@chakra-ui/react";
import { FiPlay, FiPause, FiFastForward } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useTimer } from "react-timer-hook";
import { DateTime } from "luxon";
import useSound from "use-sound";

import shortBreakStartSfx from "assets/short_break_start.mp3";
import shortBreakEndSfx from "assets/short_break_end.mp3";
import longBreakStartSfx from "assets/long_break_start.mp3";
import longBreakEndSfx from "assets/long_break_end.mp3";

function Timer() {
  // Get app settings
  const settings = useSelector((state) => state.settings);

  // Init sounds
  const [playShortBreakStart] = useSound(shortBreakStartSfx);
  const [playShortBreakEnd] = useSound(shortBreakEndSfx);
  const [playLongBreakStart] = useSound(longBreakStartSfx);
  const [playLongBreakEnd] = useSound(longBreakEndSfx);

  // Init state
  const [playIcon, setPlayIcon] = useState(<FiPlay />);
  const [pomoCounter, setPomoCounter] = useState(1);
  const [timerState, setTimerState] = useState("pomo");

  const notify = (title, options = {}) => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      new Notification(title, options);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification(title, options);
        }
      });
    }
  };

  const timerHandler = (autoResume, playSound) => () => {
    // Restart timer for current state
    if (timerState === "pomo") {
      if (pomoCounter >= settings.pomoCount) {
        setTimerState("longBreak");
        if (playSound) playLongBreakStart();
        notify("Pomo", { body: "Time for a long break!", silent: true });
        setTimeout(() => {
          restart(
            DateTime.now().plus({ minutes: settings.longBreak }),
            autoResume,
          );
        }, 100);
      } else {
        setTimerState("shortBreak");
        if (playSound) playShortBreakStart();
        notify("Pomo", { body: "Time for a short break!", silent: true });
        setTimeout(() => {
          restart(
            DateTime.now().plus({ minutes: settings.shortBreak }),
            autoResume,
          );
        }, 100);
      }
    } else if (timerState === "shortBreak" || timerState === "longBreak") {
      switch (timerState) {
        default:
        case "shortBreak":
          if (playSound) playShortBreakEnd();
          break;
        case "longBreak":
          if (playSound) playLongBreakEnd();
          break;
      }
      notify("Pomo", { body: "Time to work!", silent: true });
      if (pomoCounter >= settings.pomoCount) {
        setPomoCounter(1);
      } else {
        setPomoCounter((old) => old + 1);
      }
      setTimerState("pomo");
      setTimeout(() => {
        restart(
          DateTime.now().plus({ minutes: settings.pomoLength }),
          autoResume,
        );
      }, 100);
    }

    // Update play button
    if (!autoResume) {
      setPlayIcon(<FiPlay />);
    }
  };

  // Init timer
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp: DateTime.now().plus({ minutes: settings.pomoLength }),
    autoStart: false,
    onExpire: timerHandler(settings.autoResume, settings.sound),
  });

  // Play button handler
  const playHandler = () => {
    if (isRunning) {
      setPlayIcon(<FiPlay />);
      pause();
    } else {
      setPlayIcon(<FiPause />);
      resume();
    }
  };

  return (
    <Container>
      <VStack align="center" justify="center" minH="100vh">
        <Text
          fontSize="xl"
          fontWeight="800"
          textTransform="uppercase"
          color={() => {
            switch (timerState) {
              default:
              case "pomo":
                return "red";
              case "shortBreak":
                return "green.500";
              case "longBreak":
                return "green.600";
            }
          }}
        >
          {timerState === "pomo" && `Pomodoro ${pomoCounter}`}
          {timerState === "shortBreak" && "Short break"}
          {timerState === "longBreak" && "Long break"}
        </Text>
        <Text fontSize="8xl" fontWeight="700">
          {DateTime.fromFormat(`${minutes}:${seconds}`, "m:s").toFormat("m:ss")}
        </Text>
        <HStack>
          <Button
            variant="circle"
            colorScheme="blue"
            size="xl"
            onClick={playHandler}
          >
            {playIcon}
          </Button>
          <Button
            variant="circle"
            colorScheme="gray"
            size="xl"
            onClick={timerHandler(false, false)}
          >
            <FiFastForward />
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}

export default Timer;
