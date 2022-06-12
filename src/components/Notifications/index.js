import { useEffect } from "react";

import { useSelector } from "react-redux";
import { notifyMe, requestNotifications } from "utils/notify";

function Notifications() {
  // Get app state
  const settings = useSelector((state) => state.settings);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);

  useEffect(() => {
    if (settings.notify.value && isRunning) {
      switch (stage) {
        default:
        case "POMO":
          notifyMe("Pomo", { body: "Time to focus!", silent: true });
          break;
        case "SHORT_BREAK":
          notifyMe("Pomo", { body: "Time for a short break!", silent: true });
          break;
        case "LONG_BREAK":
          notifyMe("Pomo", { body: "Time for a long break!", silent: true });
          break;
      }
    }
  }, [stage]);

  // Request notification permission on play
  useEffect(() => {
    if (isRunning) requestNotifications();
  }, [isRunning]);

  return null;
}

export default Notifications;
