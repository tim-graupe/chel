import React, { useContext, useEffect, useState } from "react";
import "../../style sheets/schedule.css";
import {
  TeamContext,
  PreviewContext,
  GameCenterContext,
} from "../../dispatch/dispatch";
import { Link, useParams } from "react-router-dom";

export const Schedule = () => {
  const [teamSchedule, setTeamSchedule] = useContext(TeamContext);
  const [preview, setPreview] = useContext(PreviewContext);
  const { gameCenter, setGameCenter, content, setContent } =
    useContext(GameCenterContext);
  const [schedule, setSchedule] = useState([]);
  const id = useParams();
  const current = new Date();

  const date = `${current.getFullYear()}-${current.getMonth() + 1}-${
    current.getDate()
  }`;

  useEffect(() => {
    const getSchedule = () => {
      fetch(
        `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${date}&endDate=2023-04-16&expand=schedule.ticket&expand=schedule.broadcasts&expand=schedule.linescore`,
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
    fetch(`https://statsapi.web.nhl.com/api/v1/game/${gamePk}/content`, {
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
    <>
      <div id="schedule-container">
        {schedule.map((games) => {
          return (
            <div key={games.date}>
              <h1>
                {new Date(`${games.date}`).toLocaleString("en-US", {
                  timeZone: "UTC",
                  month: "short",
                  year: "2-digit",
                  day: "numeric",
                })}
              </h1>
              <table id="schedule-day-container">
                <thead>
                  <tr>
                    <th>Matchup</th>
                    <th>Time</th>
                    <th>Game Info</th>
                  </tr>
                </thead>
                <tbody>
                  {games.games.map((game) => {
                    const time = new Date(game.gameDate);
                    if (
                      game.status.abstractGameState === "Preview" &&
                      game.tickets !== undefined
                    ) {
                      return (
                        <tr key={game.gamePk}>
                          <td>
                            <Link
                              className="link-style"
                              to={`/schedule/${game.teams.away.team.id}`}
                            >
                              {game.teams.away.team.name}
                            </Link>{" "}
                            @
                            <Link
                              className="link-style"
                              to={`/schedule/${game.teams.home.team.id}`}
                            >
                              {" "}
                              {game.teams.home.team.name}{" "}
                            </Link>
                          </td>

                          <td>{`${time.getHours()}:${
                            time.getMinutes() < 2
                              ? "00"
                              : "" + time.getMinutes()
                          }`}</td>

                          <td>
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
                          </td>

                          <td>
                            <a
                              className="link-style"
                              href={game.tickets[0].ticketLink}
                            >
                              Tickets
                            </a>
                          </td>
                        </tr>
                      );
                    } else if (
                      game.status.abstractGameState === "Preview" &&
                      game.broadcasts === undefined
                    ) {
                      return (
                        <tr key={game.gamePk}>
                          <td>
                            <Link
                              className="link-style"
                              to={`/schedule/${game.teams.away.team.id}`}
                            >
                              {game.teams.away.team.name}
                            </Link>{" "}
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
                          </td>

                          <td>{`${time.getHours()}:${
                            time.getMinutes() < 2
                              ? "00"
                              : "" + time.getMinutes()
                          }`}</td>
                          <td>
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
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr key={game.gamePk}>
                          <td>
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
                          </td>

                          <td>
                            {/* {game.status.abstractGameState}{" "} */}
                            <img
                              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.teams.away.team.id}.svg`}
                              className="schedule-logos"
                              alt="team-pic"
                            />
                            {game.teams.away.score} {game.teams.home.score}
                            <img
                              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.teams.home.team.id}.svg`}
                              className="schedule-logos"
                              alt="team-pic"
                            />{" "}
                          </td>

                          <td>
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
                            </Link>{" "}
                            {/* {game.broadcasts.map((broadcast) => {
                              return (
                                <div key={broadcast.type}>
                                  {broadcast.type}: {broadcast.name}
                                </div>
                              );
                            })} */}
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
};
