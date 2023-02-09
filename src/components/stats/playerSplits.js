import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../dispatch/dispatch";

export const PlayerStats = (props) => {
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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    fetch(
      ` https://statsapi.web.nhl.com/api/v1/people/${player[0].id}/stats?stats=statsSingleSeason&season=20222023&stats=byDayOfWeek&stats=byMonth&stats=homeAndAway&stats=winLoss&goalsByGameSituation`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) => setStats(response.stats))
      .catch((err) => console.error(err));
  }, []);

  if (stats[2] === undefined) {
    return <></>;
  } else {
    return (
      <table className="player-table">
        <thead>
          <tr  className="stat-row">
            <th className="sticky-col first-col">Split</th>
            <th>GP</th>
            <th>G</th> <th>A</th>
            <th>P</th> <th>+/-</th> <th>PIM</th> <th>PPG</th> <th>SHG</th>
            <th>SHP</th> <th>GWG</th> <th>OTG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="sticky-col first-col">Home</td>
            <td>{stats[3].splits[0].stat.games}</td>
            <td>{stats[3].splits[0].stat.goals}</td>
            <td>{stats[3].splits[0].stat.assists}</td>
            <td>{stats[3].splits[0].stat.points}</td>
            <td>{stats[3].splits[0].stat.plusMinus}</td>
            <td>{stats[3].splits[0].stat.pim}</td>
            <td>{stats[3].splits[0].stat.powerPlayGoals}</td>
            <td>{stats[3].splits[0].stat.shortHandedGoals}</td>
            <td>{stats[3].splits[0].stat.shortHandedPoints}</td>
            <td>{stats[3].splits[0].stat.gameWinningGoals}</td>
            <td>{stats[3].splits[0].stat.overTimeGoals}</td>
          </tr>
          <tr>
            <td className="sticky-col first-col">Away</td>
            <td>{stats[3].splits[0].stat.games}</td>
            <td>{stats[3].splits[1].stat.goals}</td>
            <td>{stats[3].splits[1].stat.assists}</td>
            <td>{stats[3].splits[1].stat.points}</td>
            <td>{stats[3].splits[1].stat.plusMinus}</td>
            <td>{stats[3].splits[1].stat.pim}</td>
            <td>{stats[3].splits[1].stat.powerPlayGoals}</td>
            <td>{stats[3].splits[1].stat.shortHandedGoals}</td>
            <td>{stats[3].splits[1].stat.shortHandedPoints}</td>
            <td>{stats[3].splits[1].stat.gameWinningGoals}</td>
            <td>{stats[3].splits[1].stat.overTimeGoals}</td>
          </tr>
          <tr>
            <td className="sticky-col first-col">Wins</td>
            <td>{stats[4].splits[0].stat.games}</td>
            <td>{stats[4].splits[0].stat.goals}</td>
            <td>{stats[4].splits[0].stat.assists}</td>
            <td>{stats[4].splits[0].stat.points}</td>
            <td>{stats[4].splits[0].stat.plusMinus}</td>
            <td>{stats[4].splits[0].stat.pim}</td>
            <td>{stats[4].splits[0].stat.powerPlayGoals}</td>
            <td>{stats[4].splits[0].stat.shortHandedGoals}</td>
            <td>{stats[4].splits[0].stat.shortHandedPoints}</td>
            <td>{stats[4].splits[0].stat.gameWinningGoals}</td>
            <td>{stats[4].splits[0].stat.overTimeGoals}</td>
          </tr>
          <tr>
            <td className="sticky-col first-col">Losses</td>
            <td>{stats[4].splits[1].stat.games}</td>
            <td>{stats[4].splits[1].stat.goals}</td>
            <td>{stats[4].splits[1].stat.assists}</td>
            <td>{stats[4].splits[1].stat.points}</td>
            <td>{stats[4].splits[1].stat.plusMinus}</td>
            <td>{stats[4].splits[1].stat.pim}</td>
            <td>{stats[4].splits[1].stat.powerPlayGoals}</td>
            <td>{stats[4].splits[1].stat.shortHandedGoals}</td>
            <td>{stats[4].splits[1].stat.shortHandedPoints}</td>
            <td>{stats[4].splits[1].stat.gameWinningGoals}</td>
            <td>{stats[4].splits[1].stat.overTimeGoals}</td>
          </tr>
          {stats[2].splits.map((month) => {
            return (
              <tr key={month.month}>
                <td className="sticky-col first-col">{months[`${month.month}`]}</td>
                <td>{month.stat.games}</td>
                <td>{month.stat.goals}</td>
                <td>{month.stat.assists}</td>
                <td>{month.stat.points}</td>
                <td>{month.stat.plusMinus}</td>
                <td>{month.stat.pim}</td>
                <td>{month.stat.powerPlayGoals}</td>
                <td>{month.stat.shortHandedGoals}</td>
                <td>{month.stat.shortHandedPoints}</td>
                <td>{month.stat.gameWinningGoals}</td>
                <td>{month.stat.overTimeGoals}</td>
              </tr>
            );
          })}
          {stats[1].splits.map((day) => {
            return (
              <tr key={day.dayOfWeek}>
                <td className="sticky-col first-col">{week[`${day.dayOfWeek}`]}</td>
                <td>{day.stat.games}</td>
                <td>{day.stat.goals}</td>
                <td>{day.stat.assists}</td>
                <td>{day.stat.points}</td>
                <td>{day.stat.plusMinus}</td>
                <td>{day.stat.pim}</td>
                <td>{day.stat.powerPlayGoals}</td>
                <td>{day.stat.shortHandedGoals}</td>
                <td>{day.stat.shortHandedPoints}</td>
                <td>{day.stat.gameWinningGoals}</td>
                <td>{day.stat.overTimeGoals}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
};
