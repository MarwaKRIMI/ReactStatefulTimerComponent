import React from "react";

const msToTime = ms => {
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;

  const hours = Math.floor(ms / msPerHour);
  const hoursRest = ms % msPerHour;
  const minutes = Math.floor(hoursRest / msPerMinute);
  const minutesRest = hoursRest % msPerMinute;
  const seconds = Math.floor(minutesRest / msPerSecond);
  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
};

const StaticTimer = ({ ms }) => {
  return (
    <div className="time-container">
      <h6>the conversion of {ms} in format HH: mm: ss is </h6>
      <div
        className="time-inner-container"
        style={{ display: "inline - block" }}
      >
        <div
          className="time-digits"
          style={{ textAlign: "center", fontSize: "4em" }}
        >
          {msToTime(ms)}
        </div>
        <div
          className="time-text"
          style={{
            display: "flex",
            justifyContent: "space-around",
            color: "gold",
            fontSize: "1em"
          }}
        >
          <div className="time-text-item">Hour</div>
          <div className="time-text-item">Minute</div>
          <div className="time-text-item">Second</div>
        </div>
      </div>
    </div>
  );
};

export default StaticTimer;
