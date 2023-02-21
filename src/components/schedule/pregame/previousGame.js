import React, { useContext, useEffect, useState } from "react";
import { PreviewContext, GameCenterContext } from "../../../dispatch/dispatch";
import { Link } from "react-router-dom";
export const PreviousGame = (props) => {
  const [preview, setPreview] = useContext(PreviewContext);
  const { gameCenter, setGameCenter, content, setContent } =
    useContext(GameCenterContext);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    if (props.teams[0] === undefined) {
      return;
    } else {
      fetch(
        `https://statsapi.web.nhl.com/api/v1/schedule/?teamId=${props.teams[0].id},${props.teams[1].id}&season=20222023`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) => setSeries(response.dates))
        .catch((err) => console.error(err));
    }
  }, [props.teams]);

  const getGameInfo = (gamePk) => {
    fetch(`https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setGameCenter({ gameCenter: response }))
      .catch((err) => console.error(err));
  };

  const getContent = (gamePk) => {
    fetch(`https://statsapi.web.nhl.com/api/v1/game/${gamePk}/content`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setContent({ content: response }))
      .catch((err) => console.error(err));
  };

  return (
    <table id="previous-game-table">
      <thead>
        <tr>
          <th>Previous Matchup</th>
        </tr>
      </thead>
      {series
        .filter(
          (game) =>
            (game.games[0].teams.away.team.id === props.teams[0].id &&
              game.games[0].teams.home.team.id === props.teams[1].id &&
              game.games[0].status.abstractGameState === "Final") ||
            (game.games[0].teams.away.team.id === props.teams[1].id &&
              game.games[0].teams.home.team.id === props.teams[0].id &&
              game.games[0].status.abstractGameState === "Final")
        )
        .slice(-1)
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
              <tr>
                <Link
                  className="link-style"
                  to={`/game/${game.games[0].gamePk}/away/${props.teams[0].id}/home/${props.teams[1].id}`}
                  onClick={() => {
                    getGameInfo(game.games[0].gamePk);
                    getContent(game.games[0].gamePk);
                    setGameCenter(game);
                  }}
                >
                  GameCenter
                </Link>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
};
