import React, { useContext, useEffect, useState } from "react";
import { GameCenterContext } from "../../dispatch/dispatch";
import { Link } from "react-router-dom";

export const FinalScores = (props) => {
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
          {props.game.teams.away.team.name}
        </div>
        <div>
          {props.game.teams.away.leagueRecord.wins} -{" "}
          {props.game.teams.away.leagueRecord.losses} -{" "}
          {props.game.teams.away.leagueRecord.ot}
        </div>
        <div className="scores-boxes-teams-home">
          {props.game.teams.home.team.name}
        </div>
        <div>
          {props.game.teams.home.leagueRecord.wins} -{" "}
          {props.game.teams.home.leagueRecord.losses} -{" "}
          {props.game.teams.home.leagueRecord.ot}
        </div>

        <div className="broadcast-details">
          {props.game.broadcasts.map((broadcast) => {
            return <p key={broadcast.id}>{broadcast.name}</p>;
          })}
        </div>
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
