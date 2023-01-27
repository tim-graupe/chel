import React, { useContext, useEffect, useState } from "react";
import { PreviewContext } from "../../../dispatch/dispatch";

export const SeasonSeries = () => {
  const [preview, setPreview] = useContext(PreviewContext);
    // const home = game.gameCenter.gameCenter.gameData.teams.home;
    // const away = game.gameCenter.gameCenter.gameData.teams.away;
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/schedule/?teamId=${preview[0].id},${preview[1].id}&season=20222023`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) => setSeries(response.dates))
      .catch((err) => console.error(err));
  }, []);

  if (preview === undefined) {
    return <>no</>
  } else {
    return (
      <table id="series-table">
        <thead>
          <tr>
            <th colSpan="2">Season Series</th>
          </tr>
        </thead>

        {series
          .filter(
            (game) =>
            (game.games[0].status.abstractGameState === "Final") &&
              (game.games[0].teams.away.team.id === preview[0].id &&
                game.games[0].teams.home.team.id === preview[1].id) ||
              (game.games[0].teams.away.team.id === preview[1].id &&
                game.games[0].teams.home.team.id === preview[0].id)
          )
          .map((game) => {
            return (
              <tbody key={game.date}>
                <tr>
                  <td>
                    {new Date(`${game.games[0].gameDate}`).toLocaleString(
                      "en-En",
                      { month: "short", day: "numeric", year: "2-digit" }
                    )}{" "}
                    {game.games[0].status.detailedState}
                  </td>
                </tr>
                <tr>
                  <td>{game.games[0].teams.away.team.name} </td>
                  <td style={{ textAlign: "right" }}>
                    {game.games[0].teams.away.score}
                  </td>
                </tr>
                <tr>
                  <td>{game.games[0].teams.home.team.name} </td>
                  <td style={{ textAlign: "right" }}>
                    {game.games[0].teams.home.score}
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    );
  }
};