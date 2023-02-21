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
      <table className="player-table">
        <caption>Game Log</caption>
        <thead>
          <tr>
            <th className="sticky-col first-col">Date</th>
            <th className="stat-row">Opponent</th>

            <th className="stat-row">GS</th>
            <th className="stat-row">W</th>
            <th className="stat-row">L</th>
            <th className="stat-row">OT</th>
            <th className="stat-row">SA</th>
            <th className="stat-row">GA</th>

            <th className="stat-row">SV%</th>
            <th className="stat-row">SO</th>
            <th className="stat-row">MIN</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((game) => {
            if (game.isWin === true) {
              return (
                <tr key={game.date}>
                  <td className="sticky-col first-col">
                    {new Date(`${game.date}`).toLocaleString("en-En", {
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td>{game.opponent.name}</td>
                  <td>{game.stat.gamesStarted}</td>
                  <td>1</td>
                  <td>--</td>
                  <td>{game.stat.ot}</td>
                  <td>{game.stat.shotsAgainst}</td>
                  <td>{game.stat.goalsAgainst}</td>

                  <td>{game.stat.savePercentage.toFixed(3)}</td>

                  <td>{game.stat.shutouts}</td>
                  <td>{game.stat.timeOnIce}</td>
                </tr>
              );
            } else if (game.isWin === false && game.isOT === false) {
              return (
                <tr key={game.date}>
                  <td className="sticky-col first-col">
                    {new Date(`${game.date}`).toLocaleString("en-En", {
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td>{game.opponent.name}</td>
                  <td>{game.stat.gamesStarted}</td>
                  <td>--</td>
                  <td>1</td>
                  <td>{game.stat.ot}</td>
                  <td>{game.stat.shotsAgainst}</td>
                  <td>{game.stat.goalsAgainst}</td>

                  <td>{game.stat.savePercentage.toFixed(3)}</td>
                  <td>{game.stat.shutouts}</td>
                  <td>{game.stat.timeOnIce}</td>
                </tr>
              );
            } else if (game.isWin === false && game.isOT === true) {
              return (
                <tr key={game.date}>
                  <td className="sticky-col first-col">
                    {new Date(`${game.date}`).toLocaleString("en-En", {
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td>{game.opponent.name}</td>
                  <td>{game.stat.gamesStarted}</td>
                  <td>--</td>
                  <td>--</td>
                  <td>{game.stat.ot}</td>
                  <td>{game.stat.shotsAgainst}</td>
                  <td>{game.stat.goalsAgainst}</td>

                  <td>{game.stat.savePercentage.toFixed(3)}</td>
                  <td>{game.stat.shutouts}</td>
                  <td>{game.stat.timeOnIce}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    );
  }
};

// GP, G, A , P =/-, PIM, PPG, SHG, SHP, GWG, OTG
