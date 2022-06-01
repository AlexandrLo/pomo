import { useDispatch } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";

import { toggleRunning } from "store/slices/timerSlice";

function HotKeysManager() {
  const dispatch = useDispatch();

  useHotkeys("space", (e) => {
    dispatch(toggleRunning());
    e.preventDefault();
  });

  return null;
}

export default HotKeysManager;
