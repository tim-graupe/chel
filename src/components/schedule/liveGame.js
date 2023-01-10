import React, { useContext } from "react";
import { GameCenterContext } from "../../dispatch/dispatch";
import { ScheduleRoster } from "./scheduleRoster";

export const LiveGame = () => {
  const game = useContext(GameCenterContext);

  return (
    <div id="live-game-container">
      <section id="left-live-game-col">
        <div id="live-left-col-nav">
          <div className="live-left-col-nav-buttons">BOX</div>
          <div className="live-left-col-nav-buttons">TEAM STATS</div>
          <div className="live-left-col-nav-buttons">VIDEO</div>
        </div>

        <table id="live-game-scoreboard">
          <thead>
            <tr>
              <th>
                {
                  game.gameCenter.gameCenter.liveData.linescore
                    .currentPeriodTimeRemaining
                }{" "}
                /{" "}
                {
                  game.gameCenter.gameCenter.liveData.linescore
                    .currentPeriodOrdinal
                }{" "}
              </th>{" "}
              <th>1st</th>
              <th>2nd</th>
              <th>3rd</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <img
                  src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.gameCenter.gameCenter.gameData.teams.away.id}.svg`}
                  className="schedule-logos"
                  alt="team-pic"
                />{" "}
                {game.gameCenter.gameCenter.gameData.teams.away.teamName}
                {
                  game.gameCenter.gameCenter.liveData.boxscore.teams.away
                    .teamStats.teamSkaterStats.shots
                }{" "}
                SOG
              </td>
              {game.gameCenter.gameCenter.liveData.linescore.periods.map(
                (period) => {
                  return <td>{period.away.goals}</td>;
                }
              )}
            </tr>
            <tr>
              <td>
                {" "}
                <img
                  src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.gameCenter.gameCenter.gameData.teams.home.id}.svg`}
                  className="schedule-logos"
                  alt="team-pic"
                />{" "}
                {game.gameCenter.gameCenter.gameData.teams.home.teamName}
                {
                  game.gameCenter.gameCenter.liveData.boxscore.teams.home
                    .teamStats.teamSkaterStats.shots
                }{" "}
                SOG
              </td>
              {game.gameCenter.gameCenter.liveData.linescore.periods.map(
                (period) => {
                  return <td>{period.home.goals}</td>;
                }
              )}
            </tr>
          </tbody>
        </table>

        <table id="scorers">
          <caption>Scoring</caption>
          <thead>
            
            <tr>
              <th>1st Period</th>
            </tr>
          </thead>
          <tbody>
        {game.gameCenter.gameCenter.liveData.plays.allPlays.filter(play => play.about.period === 1 && play.result.event === "Goal").map((scoringPlay) => {
            return (
                <tr>
                    <td>{scoringPlay.result.description}</td>
                </tr>
            )
        })}
          </tbody>
          <thead>
            <tr>
              <th>2nd Period</th>
            </tr>
          </thead>
          <tbody>
          {game.gameCenter.gameCenter.liveData.plays.allPlays.filter(play => play.about.period === 2 && play.result.event === "Goal").map((scoringPlay) => {
            return (
                <tr>
                    <td>{scoringPlay.result.description}</td>
                </tr>
            )
        })}
          </tbody>
          <thead>
            <tr>
              <th>3rd Period</th>
            </tr>
          </thead>
          <tbody>
          {game.gameCenter.gameCenter.liveData.plays.allPlays.filter(play => play.about.period === 3 && play.result.event === "Goal").map((scoringPlay) => {
            return (
                <tr>
                    <td>{scoringPlay.result.description}</td>
                </tr>
            )
        })}
          </tbody>
        </table>
      </section>
    </div>
  );
};
