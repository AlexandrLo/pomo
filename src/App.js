import React from "react";

import FaviconUpdater from "components/FaviconUpdater";
import FullScreenPlayButton from "components/FullScreenPlayButton";
import HotKeysManager from "components/HotKeysManager";
import Notifications from "components/Notifications";
import Sounds from "components/Sounds";
import Timer from "components/Timer";

function App() {
  return (
    <>
      <Notifications />
      <Sounds />
      <FullScreenPlayButton />
      <HotKeysManager />
      <FaviconUpdater />
      <Timer />
    </>
  );
}

export default App;
