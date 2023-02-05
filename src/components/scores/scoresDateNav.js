import React, { useState, useEffect } from "react";

export const ScoresDateNav = (props) => {

  // {`${props.day.getFullYear()}-${props.day.getMonth() + 1}-${
  //   props.day.getDate()
  // }`}

  return (
    <div>
      {new Date(`${props.yesterday}`).toLocaleString("en-US", {
        timeZone: "UTC",
        month: "short",
        day: "numeric",
        weekday: "long",
      })}
      {new Date(`${props.today}`).toLocaleString("en-US", {
        timeZone: "UTC",
        month: "short",
        day: "numeric",
        weekday: "long",
      })}

      {new Date(`${props.tomorrow}`).toLocaleString("en-US", {
        timeZone: "UTC",
        month: "short",
        day: "numeric",
        weekday: "long",
      })}
      <button onClick={() => props.handleClick()}>click</button>
    </div>
  );
};
