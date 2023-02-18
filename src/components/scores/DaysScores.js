import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  TeamContext,
  PreviewContext,
  GameCenterContext,
} from "../../dispatch/dispatch";
import { FinalScores } from "./FinalScores";
import { InProgressScore } from "./InProgress";

export const DaysScores = (props) => {
  const { id } = useParams();
  const [date, setDate] = useState(id);
  const [preview, setPreview] = useContext(PreviewContext);
  const { gameCenter, setGameCenter, content, setContent } =
    useContext(GameCenterContext);

  const getPreviewStats = (away, home) => {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/?leaders&leaderCategories=points&leaderCategories=goals&leaderCategories=assists&leaderCategories=plusMinus&leaderCategories=gaa&leaderCategories=wins&leaderCategories=shutouts&leaderCategories=savePct&teamId=${away},${home}&expand=team.roster&expand=team.stats&expand=team.record&expand=team.schedule.next`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) => setPreview(response.teams))
      .catch((err) => console.error(err));
  };

  if (props.scores.length < 1) {
    return <h1>No games scheduled for this day.</h1>;
  }

  return (
    <div key={props.today}>
      <h4>
        {new Date(`${props.today}`).toLocaleString("en-US", {
          timeZone: "EST",
          month: "short",
          day: "numeric",
          weekday: "long",
        })}
        {/* {new Date(`${props.today}`).toLocaleString("en-US", {
          timeZone: "EST",
          month: "short",
          day: "numeric",
          weekday: "long",
        })} */}
      </h4>

      {props.scores[0].games.map((game) => {
        if (
          game.status.abstractGameState === "Preview" &&
          game.tickets !== undefined &&
          game.broadcasts !== undefined
        ) {
          return (
            <div className="scores-boxes" key={game.gamePk}>
              <div className="scores-boxes-teams">
                <h2 className="scores-boxes-teams-away">
                  {game.teams.away.team.name}
                </h2>
                <div>
                  {game.teams.away.leagueRecord.wins} -{" "}
                  {game.teams.away.leagueRecord.losses} -{" "}
                  {game.teams.away.leagueRecord.ot}
                </div>
                <h2 className="scores-boxes-teams-home">
                  {game.teams.home.team.name}
                </h2>
                <div>
                  {game.teams.home.leagueRecord.wins} -{" "}
                  {game.teams.home.leagueRecord.losses} -{" "}
                  {game.teams.home.leagueRecord.ot}
                </div>
              </div>
              <div className="broadcast-details">
                {game.broadcasts.map((broadcast) => {
                  return <p key={broadcast.id}>{broadcast.name}</p>;
                })}
              </div>
              <div className="scores-boxes-content">
                <Link
                  className="link-style"
                  to={`/game/${game.gamePk}/away/${game.teams.away.team.id}/home/${game.teams.home.team.id}`}
                  onClick={() => {
                    getPreviewStats(
                      game.teams.away.team.id,
                      game.teams.home.team.id
                    );

                    setGameCenter(game);
                  }}
                >
                  Preview{" "}
                </Link>

                <a className="link-style" href={game.tickets[0].ticketLink}>
                  Tickets
                </a>
              </div>
            </div>
          );
        } else if (
          (game.tickets === undefined || game.broadcasts === undefined) &&
          game.status.abstractGameState !== "Final"
        ) {
          return (
            <div key={game.gamePk} className="scores-boxes">
              <div className="scores-boxes-teams">
                <div className="scores-boxes-teams-away">
                  <div>
                    {" "}
                    <h2>{game.teams.away.team.name}</h2>
                    {game.teams.away.leagueRecord.wins} -{" "}
                    {game.teams.away.leagueRecord.losses} -{" "}
                    {game.teams.away.leagueRecord.ot}
                  </div>
                </div>
                <div className="scores-boxes-teams-home">
                  <div>
                    {" "}
                    <h2>{game.teams.home.team.name}</h2>
                    {game.teams.home.leagueRecord.wins} -{" "}
                    {game.teams.home.leagueRecord.losses} -{" "}
                    {game.teams.home.leagueRecord.ot}
                  </div>
                </div>
              </div>
              <div id="scores-boxes-content">
                <Link
                  className="link-style"
                  to={`/game/${game.gamePk}/away/${game.teams.away.team.id}/home/${game.teams.home.team.id}`}
                  onClick={() => {
                    getPreviewStats(
                      game.teams.away.team.id,
                      game.teams.home.team.id
                    );

                    setGameCenter(game);
                  }}
                >
                  Preview{" "}
                </Link>
              </div>
            </div>
          );
        }
      })}

      {props.scores[0].games.map((game) => {
        if (game.status.abstractGameState === "Final") {
          return (
            <div key={game.gamePk}>
              <FinalScores game={game} />
            </div>
          );
        } else if (game.status.abstractGameState === "Live") {
          return (
            <div key={game.gamePk}>
              <InProgressScore game={game} />
            </div>
          );
        }
      })}
    </div>
  );
};
