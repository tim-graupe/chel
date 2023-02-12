import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ScoresDateNav = (props) => {
  const previousDay = `${props.yesterday.getFullYear()}-${
    props.yesterday.getMonth() + 1
  }-${props.yesterday.getDate()}`;
  const nextDay = `${props.tomorrow.getFullYear()}-${
    props.tomorrow.getMonth() + 1
  }-${props.tomorrow.getDate()}`;


  return (
    <div id="days-nav">
      <Link to={`../scores/${previousDay}`} className="link-style">
        <div
          className="day-btn"
          onClick={() => {
            props.handlePreviousDay();
          }}
        >
          {new Date(`${props.yesterday}`).toLocaleString("en-US", {
            timeZone: "EST",
            month: "short",
            day: "numeric",
            weekday: "long",
          })}
        </div>
      </Link>
      <div className="day-btn" id="current-day">
        {new Date(`${props.today}`).toLocaleString("en-US", {
          timeZone: "EST",
          month: "short",
          day: "numeric",
          weekday: "long",
        })}
      </div>

      <Link to={`../scores/${nextDay}`} className="link-style">
        <div className="day-btn" onClick={() => props.handleNextDay()}>
          {new Date(`${props.tomorrow}`).toLocaleString("en-US", {
            timeZone: "EST",
            month: "short",
            day: "numeric",
            weekday: "long",
          })}
        </div>
      </Link>
    </div>
  );
};
