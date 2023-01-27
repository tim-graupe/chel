import React, { useContext, useEffect, useState } from "react";
import "../style sheets/schedule.css";
import {
  TeamContext,
  PreviewContext,
  GameCenterContext,
} from "../dispatch/dispatch";
import { Link, useParams } from "react-router-dom";

export const TopScoreBoard = () => {
  const [teamSchedule, setTeamSchedule] = useContext(TeamContext);
  const [preview, setPreview] = useContext(PreviewContext);
  const { gameCenter, setGameCenter, content, setContent } =
    useContext(GameCenterContext);
  const [schedule, setSchedule] = useState([]);
  const id = useParams();
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  useEffect(() => {
    const getSchedule = () => {
      fetch(
        `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${date}&endDate=2023-01-27&expand=schedule.ticket&expand=schedule.broadcasts&expand=schedule.linescore`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) => setSchedule(response.dates))
        .catch((err) => console.error(err));
    };
    getSchedule();
  }, []);
  

  const getGameInfo = (gamePk) => {
    fetch(`https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setGameCenter({ gameCenter: response }))
      .catch((err) => console.error(err));
  };

  const getContent = (gamePk) => {
    fetch(`http://statsapi.web.nhl.com/api/v1/game/${gamePk}/content`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setContent({ content: response }))
      .catch((err) => console.error(err));
  };

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

  const getTeamSchedule = (id) => {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/schedule?teamId=${id}&season=20222023`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) => setTeamSchedule(response.dates))
      .catch((err) => console.error(err));
  };

  return (
    <div id="top-nav-container">
        {schedule.map((games) => {
          return (
            <div key={games.date}  className="top-nav-individual-gamebox">
              <h4>
                {new Date(`${games.date}`).toLocaleString("en-En", {
                  month: "short",
                  year: "2-digit",
                  day: "numeric",
                })}
              </h4>
             
                <div>
                  {games.games.map((game) => {
                    if (game.status.abstractGameState === "Preview" && game.tickets !== undefined) {
                      return (
                       <div key={game.gamePk}  className="top-nav-individual-gamebox">
                          <div>
                            <Link
                              className="link-style"
                              to={`/schedule/${game.teams.away.team.id}`}
                            >
                              {game.teams.away.team.name}
                            </Link>
                            {" "}
                             @
                            <Link
                              className="link-style"
                              to={`/schedule/${game.teams.home.team.id}`}
                              onClick={() => {
                                getTeamSchedule(id);
                              }}
                            >
                              {" "}
                              {game.teams.home.team.name}{" "}
                            </Link>
                          </div>

                          <div>
                            {/* {game.status.abstractGameState}{" "} */}
                            <img
                              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.teams.away.team.id}.svg`}
                              className="top-nav-logos"
                              alt="team-pic"
                            />
                            {game.teams.away.score} 
                            <img
                              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.teams.home.team.id}.svg`}
                              className="top-nav-logos"
                              alt="team-pic"
                            />{" "}
                            {game.teams.home.score}
                          </div>

                          <div>
                            <Link
                              className="link-style"
                              to={`/game/${game.gamePk}/away/${game.teams.away.team.id}/home/${game.teams.home.team.id}`}
                              onClick={() => {
                                getPreviewStats(
                                  game.teams.away.team.id,
                                  game.teams.home.team.id
                                );
                                setPreview(content);
                                setGameCenter(game);
                              }}
                            >
                              Preview{" "}
                            </Link>
                          </div>
             
                          <div><a className="link-style" href={game.tickets[0].ticketLink}>Tickets</a></div>
                        </div>
                      );
                    } else                     if (game.status.abstractGameState === "Preview" && game.tickets === undefined) {
                      return (
                       <div key={game.gamePk} className="top-nav-individual-gamebox">
                          <div>
                            <Link
                              className="link-style"
                              to={`/schedule/${game.teams.away.team.id}`}
                            >
                              {game.teams.away.team.name}
                            </Link>
                            {" "}
                             @
                            <Link
                              className="link-style"
                              to={`/schedule/${game.teams.home.team.id}`}
                              onClick={() => {
                                getTeamSchedule(id);
                              }}
                            >
                              {" "}
                              {game.teams.home.team.name}{" "}
                            </Link>
                          </div>

                          <div>
                            {/* {game.status.abstractGameState}{" "} */}
                            <img
                              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.teams.away.team.id}.svg`}
                              className="top-nav-logos"
                              alt="team-pic"
                            />
                            {game.teams.away.score} 
                            <img
                              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.teams.home.team.id}.svg`}
                              className="top-nav-logos"
                              alt="team-pic"
                            />{" "}
                            {game.teams.home.score}
                          </div>

                          <div>
                            <Link
                              className="link-style"
                              to={`/game/${game.gamePk}/away/${game.teams.away.team.id}/home/${game.teams.home.team.id}`}
                              onClick={() => {
                                getPreviewStats(
                                  game.teams.away.team.id,
                                  game.teams.home.team.id
                                );
                                setPreview(content);
                                setGameCenter(game);
                              }}
                            >
                              Preview{" "}
                            </Link>
                          </div>
             
                        </div>
                      );
                    } else {
                      return (
                       <div key={game.gamePk}  className="top-nav-individual-gamebox" >
                          <div>
                            <Link
                              className="link-style"
                              to={`/schedule/${game.teams.away.team.id}`}
                            >
                              {game.teams.away.team.name}
                            </Link>
                            @
                            <Link
                              className="link-style"
                              to={`/schedule/${game.teams.home.team.id}`}
                              onClick={() => {
                                getTeamSchedule(id);
                              }}
                            >
                              {" "}
                              {game.teams.home.team.name}{" "}
                            </Link>
                          </div>

                          <div>
                            {/* {game.status.abstractGameState}{" "} */}
                            <img
                              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.teams.away.team.id}.svg`}
                              className="top-nav-logos"
                              alt="team-pic"
                            />
                            {game.teams.away.score} {game.teams.home.score}
                            <img
                              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.teams.home.team.id}.svg`}
                              className="top-nav-logos"
                              alt="team-pic"
                            />{" "}
                          </div>

                          <div>
                            <Link
                              className="link-style"
                              to={`/game/${game.gamePk}/away/${game.teams.away.team.id}/home/${game.teams.home.team.id}`}
                              onClick={() => {
                                getGameInfo(game.gamePk);
                                getContent(game.gamePk);
                                setGameCenter(game);
                              }}
                            >
                              GameCenter
                            </Link>
                            {" "}
                            {game.broadcasts.map((broadcast) => {
                                return (
                                  <div key={broadcast.type}>{broadcast.type}: {broadcast.name}</div>
                                )
                            })}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
            </div>
          );
        })}
    </div>
  );
};
