import { useEffect } from "react";

import useSound from "use-sound";

import longBreakEndSfx from "assets/sounds/long_break_end.m4a";
import longBreakStartSfx from "assets/sounds/long_break_start.m4a";
import shortBreakEndSfx from "assets/sounds/short_break_end.m4a";
import shortBreakStartSfx from "assets/sounds/short_break_start.m4a";
import startSfx from "assets/sounds/start.m4a";
import { useSelector } from "react-redux";

function Sounds() {
  const settings = useSelector((state) => state.settings);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);
  const prevStage = useSelector((state) => state.timer.prevStage);

  const [playShortBreakStart] = useSound(shortBreakStartSfx);
  const [playShortBreakEnd] = useSound(shortBreakEndSfx);
  const [playLongBreakStart] = useSound(longBreakStartSfx);
  const [playLongBreakEnd] = useSound(longBreakEndSfx);
  const [playStart] = useSound(startSfx);

  useEffect(() => {
    if (isRunning && settings.sound.value) playStart();
  }, [isRunning]);

  useEffect(() => {
    if (isRunning && settings.sound.value) {
      switch (stage) {
        default:
        case "POMO":
          switch (prevStage) {
            default:
            case "SHORT_BREAK":
              playShortBreakEnd();
              break;
            case "LONG_BREAK":
              playLongBreakEnd();
              break;
          }
          break;
        case "SHORT_BREAK":
          playShortBreakStart();
          break;
        case "LONG_BREAK":
          playLongBreakStart();
          break;
      }
    }
  }, [stage]);

  return null;
}

export default Sounds;
