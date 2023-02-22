import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../dispatch/dispatch";

export const Career = (props) => {
  let player = useContext(PlayerContext);
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
  if (props.props === "goalie") {
    return (
      <table className="player-table">
        <thead>
          <tr>
            <th className="sticky-col first-col">Season</th>
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
          {player[2][0].map((season) => {
            return (
              <tr key={season.season}>
                <td className="sticky-col first-col">
                  {season.season.slice(0, 4)}-{season.season.slice(-4)}
                </td>
                <td>{season.stat.games}</td>
                      <td>{season.stat.gamesStarted}</td>
                      <td>{season.stat.wins}</td>
                      <td>{season.stat.losses}</td>
                      <td>{season.stat.ot}</td>
                      <td>{season.stat.goalsAgainst}</td>
                      <td>{season.stat.shotsAgainst}</td>
                      <td>{season.stat.savePercentage.toFixed(3)}</td>
                      <td>
                        {Math.round(season.stat.goalAgainstAverage * 100) / 100}
                      </td>
                      <td>{season.stat.shutouts}</td>
                      <td>{season.stat.timeOnIce}</td>
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
          <tr>
            <th className="sticky-col first-col">Season</th>
            <th>Games</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Points</th>
            <th>+/-</th>
            <th>PIM</th>
            <th>PPG</th>
            <th>PPP</th>
            <th>SHG</th>
            <th>SHP</th>
            <th>GWG</th>
            <th>OTG</th>
            <th>S</th>
            <th>S%</th>
          </tr>
        </thead>
        <tbody>
          {player[2][0].map((season) => {
            return (
              <tr key={`${season.season} + ${season.sequenceNumber}`}>
                <td className="sticky-col first-col">
                  {season.season.slice(0, 4)}-{season.season.slice(-4)}
                </td>
                <td>{season.stat.games}</td>
                <td>{season.stat.goals}</td>
                <td>{season.stat.assists}</td>
                <td>{season.stat.points}</td>
                <td>{season.stat.plusMinus}</td>
                <td>{season.stat.pim}</td>
                <td>{season.stat.powerPlayGoals}</td>
                <td>{season.stat.powerPlayPoints}</td>
                <td>{season.stat.shortHandedGoals}</td>
                <td>{season.stat.shortHandedPoints}</td>
                <td>{season.stat.gameWinningGoals}</td>
                <td>{season.stat.overTimeGoals}</td>
                <td>{season.stat.shots}</td>
                <td>{season.stat.shotPct}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
};

// GP, G, A , P =/-, PIM, PPG, SHG, SHP, GWG, OTG
