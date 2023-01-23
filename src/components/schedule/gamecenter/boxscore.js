import React, { useContext, useEffect } from "react";
import { GameCenterContext } from "../../../dispatch/dispatch";

export const Boxscore = () => {
  const game = useContext(GameCenterContext);

  
  return (
    <>
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
                return <td key={period.num}>{period.away.goals}</td>;
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
                return <td key={period.num}>{period.home.goals}</td>;
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
          {game.gameCenter.gameCenter.liveData.plays.allPlays
            .filter(
              (play) => play.about.period === 1 && play.result.event === "Goal"
            )
            .map((scoringPlay) => {
              return (
                <tr key={scoringPlay.about.eventIdx}>
                  <td>{scoringPlay.result.description}</td>
                </tr>
              );
            })}
        </tbody>
        <thead>
          <tr>
            <th>2nd Period</th>
          </tr>
        </thead>
        <tbody>
          {game.gameCenter.gameCenter.liveData.plays.allPlays
            .filter(
              (play) => play.about.period === 2 && play.result.event === "Goal"
            )
            .map((scoringPlay) => {
              return (
                <tr key={scoringPlay.about.eventIdx}>
                  <td>{scoringPlay.result.description}</td>
                </tr>
              );
            })}
        </tbody>
        <thead>
          <tr>
            <th>3rd Period</th>
          </tr>
        </thead>
        <tbody>
          {game.gameCenter.gameCenter.liveData.plays.allPlays
            .filter(
              (play) => play.about.period === 3 && play.result.event === "Goal"
            )
            .map((scoringPlay) => {
              return (
                <tr key={scoringPlay.about.eventIdx}>
                  <td>{scoringPlay.result.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <table id="shots-on-goal-table">
        <thead>
          <tr>
            <th>Period</th>
            <th>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away.team
                  .abbreviation
              }
            </th>
            <th>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home.team
                  .abbreviation
              }
            </th>
          </tr>
        </thead>
        <tbody>
          {game.gameCenter.gameCenter.liveData.linescore.periods.map(
            (period) => {
              return (
                <tr key={period.num}>
                  <td>{period.num}</td>
                  <td>{period.away.shotsOnGoal}</td>
                  <td>{period.home.shotsOnGoal}</td>
                </tr>
              );
            }
          )}
          <tr>
            <td>Total</td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.linescore.teams.away
                  .shotsOnGoal
              }
            </td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.linescore.teams.home
                  .shotsOnGoal
              }
            </td>
          </tr>
        </tbody>
      </table>
      <table id="live-team-stats-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away.team
                  .abbreviation
              }
            </th>
            <th>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home.team
                  .abbreviation
              }
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Power Plays</td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away
                  .teamStats.teamSkaterStats.powerPlayGoals
              }{" "}
              /{" "}
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away
                  .teamStats.teamSkaterStats.powerPlayOpportunities
              }
            </td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home
                  .teamStats.teamSkaterStats.powerPlayGoals
              }{" "}
              /{" "}
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home
                  .teamStats.teamSkaterStats.powerPlayOpportunities
              }
            </td>
          </tr>
          <tr>
            <td>Power Play Goals</td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away
                  .teamStats.teamSkaterStats.powerPlayPercentage
              }
              %
            </td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home
                  .teamStats.teamSkaterStats.powerPlayPercentage
              }
              %
            </td>
          </tr>

          <tr>
            <td>PIM</td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away
                  .teamStats.teamSkaterStats.pim
              }
            </td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home
                  .teamStats.teamSkaterStats.pim
              }
            </td>
          </tr>

          <tr>
            <td>Face-Off Win %</td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away
                  .teamStats.teamSkaterStats.faceOffWinPercentage
              }
              %
            </td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home
                  .teamStats.teamSkaterStats.faceOffWinPercentage
              }
              %
            </td>
          </tr>

          <tr>
            <td>Blocked Shots</td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away
                  .teamStats.teamSkaterStats.blocked
              }
            </td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home
                  .teamStats.teamSkaterStats.blocked
              }
            </td>
          </tr>

          <tr>
            <td>Takeaways</td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away
                  .teamStats.teamSkaterStats.takeaways
              }
            </td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home
                  .teamStats.teamSkaterStats.takeaways
              }
            </td>
          </tr>

          <tr>
            <td>Giveaways</td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away
                  .teamStats.teamSkaterStats.giveaways
              }
            </td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home
                  .teamStats.teamSkaterStats.giveaways
              }
            </td>
          </tr>

          <tr>
            <td>Hits</td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.away
                  .teamStats.teamSkaterStats.hits
              }
            </td>
            <td>
              {
                game.gameCenter.gameCenter.liveData.boxscore.teams.home
                  .teamStats.teamSkaterStats.hits
              }
            </td>
          </tr>
        </tbody>
      </table>

      <table id="live-penalties-table">
        <thead>
          <tr>
            <th>1st</th>
            <th>Team</th>
            <th>Penalty</th>
          </tr>
        </thead>
        <tbody>
          {game.gameCenter.gameCenter.liveData.plays.allPlays
            .filter(
              (play) =>
                play.result.event === "Penalty" && play.about.period === 1
            )
            .map((plays) => {
              return (
                <tr key={plays.about.eventIdx}>
                  <td>{plays.about.periodTime}</td>
                  <td>{plays.team.triCode}</td>
                  <td>{plays.result.description}</td>
                </tr>
              );
            })}
        </tbody>
        <thead>
          <tr>
            <th>2nd</th>
            <th>Team</th>
            <th>Penalty</th>
          </tr>
        </thead>
        <tbody>
          {game.gameCenter.gameCenter.liveData.plays.allPlays
            .filter(
              (play) =>
                play.result.event === "Penalty" && play.about.period === 2
            )
            .map((plays) => {
              return (
                <tr key={plays.about.eventIdx}>
                  <td>{plays.about.periodTime}</td>
                  <td>{plays.team.triCode}</td>
                  <td>{plays.result.description}</td>
                </tr>
              );
            })}
        </tbody>
        <thead>
          <tr>
            <th>3rd</th>
            <th>Team</th>
            <th>Penalty</th>
          </tr>
        </thead>
        <tbody>
          {game.gameCenter.gameCenter.liveData.plays.allPlays
            .filter(
              (play) =>
                play.result.event === "Penalty" && play.about.period === 3
            )
            .map((plays) => {
              return (
                <tr key={plays.about.eventIdx}>
                  <td>{plays.about.periodTime}</td>
                  <td>{plays.team.triCode}</td>
                  <td>{plays.result.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
