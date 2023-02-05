import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  TeamContext,
  PreviewContext,
  GameCenterContext,
} from "../../dispatch/dispatch";

export const DaysScores = (props) => {
  const id = useParams();
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
    <div>
      <h4>
        {" "}
        {new Date(`${props.today}`).toLocaleString("en-US", {
          timeZone: "UTC",
          month: "short",
          day: "numeric",
          weekday: "long",
        })}
      </h4>

      {props.scores[0].games.map((game) => {
        if (
          game.status.abstractGameState === "Preview" &&
          game.tickets !== undefined
        ) {
          return (
            <div className="scores-boxes" key={game.gamepk}>
              <div className="scores-boxes-teams">
                <div className="scores-boxes-teams-away">
                  {game.teams.away.team.name}
                </div>
                <div>
                  {game.teams.away.leagueRecord.wins} -{" "}
                  {game.teams.away.leagueRecord.losses} -{" "}
                  {game.teams.away.leagueRecord.ot}
                </div>
                <div className="scores-boxes-teams-home">
                  {game.teams.home.team.name}
                </div>
                <div>
                  {game.teams.home.leagueRecord.wins} -{" "}
                  {game.teams.home.leagueRecord.losses} -{" "}
                  {game.teams.home.leagueRecord.ot}
                </div>

            <div className="broadcast-details">
                {game.broadcasts.map((broadcast) => {
                    return (
                        <p key={broadcast.id}>{broadcast.name}</p>
                    )
                })}
                </div>
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
        } else if (game.tickets === undefined) {
          return (
            <div key={game.gamepk}>
              <div className="scores-boxes-teams">
                <div className="scores-boxes-teams-away">
                  {game.teams.away.team.name}
                  {game.teams.away.leagueRecord.wins} -{" "}
                  {game.teams.away.leagueRecord.losses} -{" "}
                  {game.teams.away.leagueRecord.ot}
                </div>
                <div className="scores-boxes-teams-home">
                  {game.teams.home.team.name}
                  {game.teams.home.leagueRecord.wins} -{" "}
                  {game.teams.home.leagueRecord.losses} -{" "}
                  {game.teams.home.leagueRecord.ot}
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
    </div>
  );
};
