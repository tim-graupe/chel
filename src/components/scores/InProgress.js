import React, { useContext } from "react";
import { GameCenterContext } from "../../dispatch/dispatch";
import { Link } from "react-router-dom";
export const InProgressScore = (props) => {
  const { gameCenter, setGameCenter, content, setContent } =
    useContext(GameCenterContext);

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
    <div className="scores-boxes" key={props.game.gamepk}>
      <div className="scores-boxes-teams">
        <div className="scores-boxes-teams-away">
          <div>
            <h2>
              {" "}

              {props.game.teams.away.team.name}
            </h2>
            <h4>
              {props.game.linescore.periods
                .map((period) => period.away.shotsOnGoal)
                .reduce((prev, next) => prev + next)}{" "}
              SOG
            </h4>
          </div>
          <h1>{props.game.teams.away.score}</h1>{" "}
        </div>
        <div></div>
        <div className="scores-boxes-teams-home">
          <div>
            <h2>{props.game.teams.home.team.name}</h2>
            <h4>
              {props.game.linescore.periods
                .map((period) => period.home.shotsOnGoal)
                .reduce((prev, next) => prev + next)}{" "}
              SOG
            </h4>
          </div>
          <h1>{props.game.teams.home.score}</h1>
        </div>
      </div>
      <div className="scores-boxes-period">
        <p>{props.game.linescore.currentPeriodOrdinal}</p>
        <p>{props.game.linescore.currentPeriodTimeRemaining}</p>
      </div>
      <div className="scores-boxes-content">
        <Link
          className="link-style"
          to={`/game/${props.game.gamePk}/away/${props.game.teams.away.team.id}/home/${props.game.teams.home.team.id}`}
          onClick={() => {
            getGameInfo(props.game.gamePk);
            getContent(props.game.gamePk);
            setGameCenter(props.game);
          }}
        >
          GameCenter
        </Link>{" "}
      </div>
    </div>
  );
};
