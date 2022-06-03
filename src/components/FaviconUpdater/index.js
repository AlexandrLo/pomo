import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

function FaviconUpdater() {
  const stage = useSelector((state) => state.timer.stage);
  const [suffix, setSuffix] = useState("focus");

  useEffect(() => {
    switch (stage) {
      default:
      case "POMO":
        setSuffix("focus");
        break;
      case "SHORT_BREAK":
        setSuffix("short-break");
        break;
      case "LONG_BREAK":
        setSuffix("long-break");
        break;
    }
  }, [stage]);

  return (
    <Helmet>
      <link
        rel="icon"
        type="image/png"
        sizes="196x196"
        href={`assets/favicons/favicon-${suffix}-196x196.png?v=2`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href={`assets/favicons/favicon-${suffix}-128.png?v=2`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`assets/favicons/favicon-${suffix}-96x96.png?v=2`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`assets/favicons/favicon-${suffix}-32x32.png?v=2`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`assets/favicons/favicon-${suffix}-16x16.png?v=2 `}
      />
      <link
        rel="shortcut icon"
        href={`assets/favicons/favicon-${suffix}.ico?v=2 `}
      ></link>
    </Helmet>
  );
}

export default FaviconUpdater;
