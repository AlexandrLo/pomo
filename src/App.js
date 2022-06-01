import React from "react";

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
      <Timer />
    </>
  );
}

export default App;
