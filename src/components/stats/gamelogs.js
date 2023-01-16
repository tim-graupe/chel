import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../dispatch/dispatch";

export const Gamelog = (props) => {
  let player = useContext(PlayerContext);
  let [stats, setStats] = useState([]);
  let week = [
    "Week",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Month",
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];

  useEffect(() => {
    fetch(
      ` https://statsapi.web.nhl.com/api/v1/people/${player[0].id}/stats?stats=gameLog`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) => setStats(response.stats[0].splits))
      .catch((err) => console.error(err));
  }, []);
  if (stats === undefined) {
    return <></>;
  } else {
    return (
      <table>
        <caption>Game Log</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Opponent</th>
            <th> G</th> <th>A </th>
            <th>P</th> <th>+/-</th> <th>PIM</th> <th>PPG</th> <th>SHG</th>{" "}
            <th>SHP</th> <th>GWG</th> <th>OTG</th>
            <th>S</th>
            <th>TOI</th>
            <th>Shifts</th>
          </tr>
        </thead>
        <tbody>
            {stats.map((game) => {
                return (
                    <tr key={game.date}>
                        <td>{new Date(`${game.date}`).toLocaleString('en-En', {month: "short", day: "numeric"})}</td>
                        <td>{game.opponent.name}</td>
                                        <td>{game.stat.goals}</td>
                <td>{game.stat.assists}</td>
                <td>{game.stat.points}</td>
                <td>{game.stat.plusMinus}</td>
                <td>{game.stat.pim}</td>
                <td>{game.stat.powerPlayGoals}</td>
                <td>{game.stat.shortHandedGoals}</td>
                <td>{game.stat.shortHandedPoints}</td>
                <td>{game.stat.gameWinningGoals}</td>
                <td>{game.stat.overTimeGoals}</td>
                <td>{game.stat.shots}</td>
                <td>{game.stat.timeOnIce}</td>
                <td>{game.stat.shifts}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    );
  }
};

// GP, G, A , P =/-, PIM, PPG, SHG, SHP, GWG, OTG
