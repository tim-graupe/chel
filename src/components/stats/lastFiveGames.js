import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../dispatch/dispatch";

export const LastFive = (props) => {
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
      <table className="last-five">
        <caption>Last 5 Games</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Opponent</th>

            <th>GS</th>
            <th>W</th>
            <th>L</th>
            <th>OT</th>
            <th>SA</th>
            <th>GA</th>

            <th>SV%</th>
            <th>SO</th>
            <th>MIN</th>
          </tr>
        </thead>
        <tbody>
          {stats.slice(0, 5).map((game) => {
            if (game.isWin === true) {
              return (
                <tr key={game.date}>
                  <td>
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
                  <td>
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
                  <td>
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
