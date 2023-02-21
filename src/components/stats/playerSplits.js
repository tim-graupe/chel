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
      ` https://statsapi.web.nhl.com/api/v1/people/${player[0].id}/stats?stats=statsSingleSeason&season=20222023&stats=byDayOfWeek&stats=byMonth&stats=homeAndAway&stats=winLoss&goalsByGameSituation&expands=person.stats`,
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
  } else if (props.props === "goalie") {
    return (
      <table className="player-table">
        <thead>
          <tr className="stat-row">
            <th className="sticky-col first-col">Split</th>
            <th>GP</th>
            <th>GS</th>
            <th>W</th>
            <th>L</th>
            <th>OT</th>
            <th>SA</th>
            <th>GA</th>
            <th>GAA</th>
            <th>SV%</th>
            <th>SO</th>
            <th>MIN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="sticky-col first-col">Home</td>
            {/* <td className="sticky-col first-col">2022 - 2023</td> */}
            <td>{stats[3].splits[0].stat.games}</td>
            <td>{stats[3].splits[0].stat.gamesStarted}</td>
            <td>{stats[3].splits[0].stat.wins}</td>
            <td>{stats[3].splits[0].stat.losses}</td>
            <td>{stats[3].splits[0].stat.ot}</td>
            <td>{stats[3].splits[0].stat.shotsAgainst}</td>
            <td>{stats[3].splits[0].stat.goalsAgainst}</td>

            <td>
              {Math.round(stats[3].splits[0].stat.goalAgainstAverage * 100) /
                100}
            </td>
            <td>{stats[3].splits[0].stat.savePercentage.toFixed(3)}</td>
            <td>{stats[3].splits[0].stat.shutouts}</td>
            <td>{stats[3].splits[0].stat.timeOnIce}</td>
          </tr>
          <tr>
            <td className="sticky-col first-col">Away</td>
            <td>{stats[3].splits[1].stat.games}</td>
            <td>{stats[3].splits[1].stat.gamesStarted}</td>
            <td>{stats[3].splits[1].stat.wins}</td>
            <td>{stats[3].splits[1].stat.losses}</td>
            <td>{stats[3].splits[1].stat.ot}</td>
            <td>{stats[3].splits[1].stat.shotsAgainst}</td>
            <td>{stats[3].splits[1].stat.goalsAgainst}</td>

            <td>
              {Math.round(stats[3].splits[1].stat.goalAgainstAverage * 100) /
                100}
            </td>
            <td>{stats[3].splits[1].stat.savePercentage.toFixed(3)}</td>
            <td>{stats[3].splits[1].stat.shutouts}</td>
            <td>{stats[3].splits[1].stat.timeOnIce}</td>
          </tr>
          <tr>
            <td className="sticky-col first-col">Wins</td>
            <td>{stats[4].splits[0].stat.games}</td>
            <td>{stats[4].splits[0].stat.gamesStarted}</td>
            <td>{stats[4].splits[0].stat.wins}</td>
            <td>{stats[4].splits[0].stat.losses}</td>
            <td>{stats[4].splits[0].stat.ot}</td>
            <td>{stats[4].splits[0].stat.shotsAgainst}</td>
            <td>{stats[4].splits[0].stat.goalsAgainst}</td>

            <td>
              {Math.round(stats[4].splits[0].stat.goalAgainstAverage * 100) /
                100}
            </td>
            <td>{stats[4].splits[0].stat.savePercentage.toFixed(4)}</td>
            <td>{stats[4].splits[0].stat.shutouts}</td>
            <td>{stats[4].splits[0].stat.timeOnIce}</td>
          </tr>
          <tr>
            <td className="sticky-col first-col">Losses</td>
            <td>{stats[4].splits[1].stat.games}</td>
            <td>{stats[4].splits[1].stat.gamesStarted}</td>
            <td>{stats[4].splits[1].stat.wins}</td>
            <td>{stats[4].splits[1].stat.losses}</td>
            <td>{stats[4].splits[1].stat.ot}</td>
            <td>{stats[4].splits[1].stat.shotsAgainst}</td>
            <td>{stats[4].splits[1].stat.goalsAgainst}</td>

            <td>
              {Math.round(stats[4].splits[1].stat.goalAgainstAverage * 100) /
                100}
            </td>
            <td>{stats[4].splits[1].stat.savePercentage.toFixed(4)}</td>
            <td>{stats[4].splits[1].stat.shutouts}</td>
            <td>{stats[4].splits[1].stat.timeOnIce}</td>
          </tr>
          {stats[2].splits.map((month) => {
            return (
              <tr key={month.month}>
                <td className="sticky-col first-col">
                  {months[`${month.month}`]}
                </td>
            <td>{month.stat.games}</td>
            <td>{month.stat.gamesStarted}</td>
            <td>{month.stat.wins}</td>
            <td>{month.stat.losses}</td>
            <td>{month.stat.ot}</td>
            <td>{month.stat.shotsAgainst}</td>
            <td>{month.stat.goalsAgainst}</td>

            <td>
              {Math.round(month.stat.goalAgainstAverage * 100) /
                100}
            </td>
            <td>{month.stat.savePercentage.toFixed(4)}</td>
            <td>{month.stat.shutouts}</td>
            <td>{month.stat.timeOnIce}</td>
              </tr>
            );
          })}
          {stats[1].splits.map((day) => {
            return (
              <tr key={day.dayOfWeek}>
                <td className="sticky-col first-col">
                  {week[`${day.dayOfWeek}`]}
                </td>
                <td>{day.stat.games}</td>
            <td>{day.stat.gamesStarted}</td>
            <td>{day.stat.wins}</td>
            <td>{day.stat.losses}</td>
            <td>{day.stat.ot}</td>
            <td>{day.stat.shotsAgainst}</td>
            <td>{day.stat.goalsAgainst}</td>

            <td>
              {Math.round(day.stat.goalAgainstAverage * 100) /
                100}
            </td>
            <td>{day.stat.savePercentage.toFixed(4)}</td>
            <td>{day.stat.shutouts}</td>
            <td>{day.stat.timeOnIce}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return (
      <table className="player-table">
        <thead>
          <tr className="stat-row">
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
                <td className="sticky-col first-col">
                  {months[`${month.month}`]}
                </td>
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
                <td className="sticky-col first-col">
                  {week[`${day.dayOfWeek}`]}
                </td>
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
