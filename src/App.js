import React from "react";

import FullScreenPlayButton from "components/FullScreenPlayButton";
import Notifications from "components/Notifications";
import Sounds from "components/Sounds";
import Timer from "components/Timer";

function App() {
  return (
    <>
      <Notifications />
      <Sounds />
      <FullScreenPlayButton />
      <Timer />
    </>
  );
}

export default App;
