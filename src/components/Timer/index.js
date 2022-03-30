import React, { useState } from "react";
import { Text, Container, VStack, HStack, Button } from "@chakra-ui/react";
import { FiPlay, FiPause, FiFastForward } from "react-icons/fi";
import { useSelector } from "react-redux";
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

  // Init state
  const [playIcon, setPlayIcon] = useState(<FiPlay />);
  const [pomoCounter, setPomoCounter] = useState(1);
  const [timerState, setTimerState] = useState("pomo");

  // Init sounds
  const [playShortBreakStart] = useSound(shortBreakStartSfx);
  const [playShortBreakEnd] = useSound(shortBreakEndSfx);
  const [playLongBreakStart] = useSound(longBreakStartSfx);
  const [playLongBreakEnd] = useSound(longBreakEndSfx);

  /**
   * Requests notification permissions and sends notifications
   *
   * @param {*} title Notification title
   * @param {*} [options={}] Notification options
   */
  const notifyMe = (title, options = {}) => {
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

  /**
   * Restarts timer
   *
   * @param {*} time Time in minutes for timer
   * @param {*} autoStart True if timer should autostart
   * @return {number} timeoutID from setTimeout()
   */
  const simpleRestart = (time, autoStart) => {
    return setTimeout(() => {
      restart(DateTime.now().plus({ minutes: time }), autoStart);
    }, 100);
  };

  /**
   * Returns function that updates timer
   *
   * @param {boolean} [autoResume=false] True if timer should autostart
   * @param {boolean} [sound=false] True if sounds is enabled
   * @param {boolean} [notify=false] True if notifications is enabled
   * @return {function} Function that cycles through pomodoro stages and updates timer accordingly
   */
  const timerHandler = (autoResume = false, sound = false, notify = false) => {
    return () => {
      // Restart timer for current state
      if (timerState === "pomo") {
        if (pomoCounter >= settings.pomoCount) {
          if (sound) playLongBreakStart();
          if (notify)
            notifyMe("Pomo", { body: "Time for a long break!", silent: true });
          setTimerState("longBreak");
          simpleRestart(settings.longBreak, autoResume);
        } else {
          if (sound) playShortBreakStart();
          if (notify)
            notifyMe("Pomo", { body: "Time for a short break!", silent: true });
          setTimerState("shortBreak");
          simpleRestart(settings.shortBreak, autoResume);
        }
      } else if (timerState === "shortBreak" || timerState === "longBreak") {
        switch (timerState) {
          default:
          case "shortBreak":
            if (sound) playShortBreakEnd();
            break;
          case "longBreak":
            if (sound) playLongBreakEnd();
            break;
        }
        if (notify) notifyMe("Pomo", { body: "Time to work!", silent: true });
        if (pomoCounter >= settings.pomoCount) {
          setPomoCounter(1);
        } else {
          setPomoCounter((old) => old + 1);
        }
        setTimerState("pomo");
        simpleRestart(settings.pomoLength, autoResume);
      }
      // Update play button
      if (!autoResume) {
        setPlayIcon(<FiPlay />);
      }
    };
  };

  /**
   * Play button handler. Pauses and resumes timer and updates button icon accordingly
   *
   */
  const playHandler = () => {
    if (isRunning) {
      setPlayIcon(<FiPlay />);
      pause();
    } else {
      setPlayIcon(<FiPause />);
      resume();
    }
  };

  // Init timer
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp: DateTime.now().plus({ seconds: settings.pomoLength }),
    autoStart: false,
    onExpire: timerHandler(
      settings.autoResume,
      settings.sound,
      settings.notify,
    ),
  });

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
            onClick={timerHandler()}
          >
            <FiFastForward />
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}

export default Timer;
