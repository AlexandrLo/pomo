import React from "react";

import { DateTime } from "luxon";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function TitleDisplay({ minutes = 0, seconds = 0 }) {
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);

  if (isRunning) {
    let stageName = "";

    switch (stage) {
      default:
      case "POMO":
        stageName = "Focus";
        break;
      case "SHORT_BREAK":
        stageName = "Short Break";
        break;
      case "LONG_BREAK":
        stageName = "Long Break";
        break;
    }

    const formatedtime = DateTime.fromFormat(
      `${minutes}:${seconds}`,
      "m:s",
    ).toFormat("mm:ss");

    return (
      <Helmet defer={false}>
        <title>{`${stageName} - ${formatedtime}`}</title>
      </Helmet>
    );
  } else {
    return (
      <Helmet>
        <title>Pomo</title>
      </Helmet>
    );
  }
}

TitleDisplay.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default TitleDisplay;
