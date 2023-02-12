import React, { useEffect } from "react";
import { useState } from "react";
import { ScoresDateNav } from "./scoresDateNav";
import { DaysScores } from "./DaysScores";
import "../../style sheets/scores.css";
import { useParams } from "react-router-dom";

export const Scores = () => {
  const urlDate = useParams();
  const [currentDay, setCurrentDay] = useState(new Date());
  const [schedule, setSchedule] = useState([]);
  const [today, setToday] = useState(currentDay);
  const [yesterday, setYesterday] = useState(
    new Date(today.getTime() - 86400000)
  );
  const [tomorrow, setTomorrrow] = useState(
    new Date(today.getTime() + 86400000)
  );

  const handlePreviousDay = () => {
    setYesterday(new Date(today.getTime() - 172800000));
    setToday(new Date(today.getTime() - 86400000));
    setTomorrrow(new Date(today.getTime()));
  };

  const handleNextDay = () => {
    setYesterday(new Date(today.getTime()));
    setToday(new Date(today.getTime() + 86400000));
    setTomorrrow(new Date(today.getTime() + 172800000));


  };


  useEffect(() => {
    const getSchedule = () => {
      fetch(
        `https://statsapi.web.nhl.com/api/v1/schedule?date=${today.getFullYear()}-${
          today.getMonth() + 1
        }-${today.getDate()}&expand=schedule.ticket&expand=schedule.broadcasts&expand=schedule.linescore&expand=schedule.venue`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) => setSchedule(response.dates))
        .catch((err) => console.error(err));
    };

    getSchedule();

   
  }, [today]);
  return (
    <div>
      <ScoresDateNav
        today={today}
        yesterday={yesterday}
        tomorrow={tomorrow}
        handlePreviousDay={handlePreviousDay}
        handleNextDay={handleNextDay}
      />

      <DaysScores scores={schedule} today={today} />
    </div>
  );
};
