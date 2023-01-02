import React, { useEffect, useState } from "react";
import { ScheduleRoster } from "./scheduleRoster";

export const Preview = (props) => {
  if (props.home === undefined) {
    return;
  } else {
    return (
      <div id="preview-container">
        <section id="preview-left-col">
          <table id="team-stats-table">
            <thead id="team-stats-header">
              <tr>
                <th>
                  {" "}
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.game.gameData.teams.away.id}.svg`}
                    className="preview-table-stats-logos"
                    alt="team-pic"
                  />{" "}
                </th>
                <th>Team Stats</th>
                <th>
                  {" "}
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.game.gameData.teams.home.id}.svg`}
                    className="preview-table-stats-logos"
                    alt="team-pic"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="players-to-watch">
                  <h4>
                    {props.home.teamStats[0].splits[0].stat.powerPlayPercentage}
                  </h4>
                  {props.home.teamStats[0].splits[1].stat.powerPlayPercentage}
                </td>
                <td className="players-to-watch"> Power Play % </td>
                <td className="players-to-watch">
                  <h4>
                    {props.away.teamStats[0].splits[0].stat.powerPlayPercentage}
                  </h4>
                  {props.away.teamStats[0].splits[1].stat.powerPlayPercentage}
                </td>
              </tr>

              <tr>
                <td className="players-to-watch">
                  <h4>
                    {
                      props.home.teamStats[0].splits[0].stat
                        .penaltyKillPercentage
                    }
                  </h4>
                  {props.home.teamStats[0].splits[1].stat.penaltyKillPercentage}
                </td>
                <td className="players-to-watch"> Penalty Kill % </td>
                <td className="players-to-watch">
                  <h4>
                    {
                      props.away.teamStats[0].splits[0].stat
                        .penaltyKillPercentage
                    }
                  </h4>
                  {props.away.teamStats[0].splits[1].stat.penaltyKillPercentage}
                </td>
              </tr>

              <tr>
                <td className="players-to-watch">
                  <h4>
                    {
                      props.home.teamStats[0].splits[0].stat
                        .faceOffWinPercentage
                    }
                  </h4>
                  {props.home.teamStats[0].splits[1].stat.faceOffWinPercentage}
                </td>
                <td className="players-to-watch"> Faceoff % </td>
                <td className="players-to-watch">
                  <h4>
                    {
                      props.away.teamStats[0].splits[0].stat
                        .faceOffWinPercentage
                    }
                  </h4>
                  {props.away.teamStats[0].splits[1].stat.faceOffWinPercentage}
                </td>
              </tr>

              <tr>
                <td className="players-to-watch">
                  <h4>{props.home.teamStats[0].splits[0].stat.goalsPerGame}</h4>
                  {props.home.teamStats[0].splits[1].stat.goalsPerGame}
                </td>
                <td className="players-to-watch"> GF / GP </td>
                <td className="players-to-watch">
                  <h4>{props.away.teamStats[0].splits[0].stat.goalsPerGame}</h4>
                  {props.away.teamStats[0].splits[1].stat.goalsPerGame}
                </td>
              </tr>

              <tr>
                <td className="players-to-watch">
                  <h4>
                    {props.home.teamStats[0].splits[0].stat.goalsAgainstPerGame}
                  </h4>
                  {props.home.teamStats[0].splits[1].stat.goalsAgainstPerGame}
                </td>
                <td className="players-to-watch"> GA / GP </td>
                <td className="players-to-watch">
                  <h4>
                    {props.away.teamStats[0].splits[0].stat.goalsAgainstPerGame}
                  </h4>
                  {props.away.teamStats[0].splits[1].stat.goalsAgainstPerGame}
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="preview-mid-col">
          <table id="players-to-watch-table">
            <thead>
              <tr>
                <th>
                  {" "}
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.game.gameData.teams.away.id}.svg`}
                    className="players-to-watch-team-logos"
                    alt="team-pic"
                  />
                </th>
                <th>Players to Watch</th>
                <th>
                  {" "}
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.game.gameData.teams.home.id}.svg`}
                    className="players-to-watch-team-logos"
                    alt="team-pic"
                  />
                </th>
              </tr>
            </thead>
            <tr>
              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${props.home.teamLeaders[0].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {props.home.teamLeaders[0].leaders[0].person.fullName}
              </td>

              <td className="players-to-watch">
                {props.home.teamLeaders[0].leaders[0].value}{" "}
                {props.home.teamLeaders[0].leaderCategory}{" "}
                {props.away.teamLeaders[0].leaders[0].value}{" "}
              </td>

              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${props.away.teamLeaders[0].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {props.away.teamLeaders[0].leaders[0].person.fullName}
              </td>
            </tr>

            <tr>
              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${props.home.teamLeaders[1].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {props.home.teamLeaders[1].leaders[0].person.fullName}
              </td>

              <td className="players-to-watch">
                {props.home.teamLeaders[1].leaders[0].value}{" "}
                {props.home.teamLeaders[1].leaderCategory}{" "}
                {props.away.teamLeaders[1].leaders[0].value}{" "}
              </td>

              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${props.away.teamLeaders[0].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {props.away.teamLeaders[0].leaders[0].person.fullName}
              </td>
            </tr>

            <tr>
              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${props.home.teamLeaders[2].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {props.home.teamLeaders[2].leaders[0].person.fullName}
              </td>

              <td className="players-to-watch">
                {props.home.teamLeaders[2].leaders[0].value}{" "}
                {props.home.teamLeaders[2].leaderCategory}{" "}
                {props.away.teamLeaders[2].leaders[0].value}{" "}
              </td>

              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${props.away.teamLeaders[0].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {props.away.teamLeaders[0].leaders[0].person.fullName}
              </td>
            </tr>

            <tr>
              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${props.home.teamLeaders[3].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {props.home.teamLeaders[3].leaders[0].person.fullName}
              </td>

              <td className="players-to-watch">
                {props.home.teamLeaders[3].leaders[0].value}{" "}
                {props.home.teamLeaders[3].leaderCategory}{" "}
                {props.away.teamLeaders[3].leaders[0].value}{" "}
              </td>

              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${props.away.teamLeaders[0].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {props.away.teamLeaders[0].leaders[0].person.fullName}
              </td>
            </tr>
          </table>

          {/* <table id="goalie-table">
            <thead>
              <tr>
                <th>
                  {" "}
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.game.gameData.teams.away.id}.svg`}
                    className="players-to-watch-team-logos"
                    alt="team-pic"
                  />
                </th>
                <th>Goaltender Comparison</th>
                <th>
                  {" "}
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.game.gameData.teams.home.id}.svg`}
                    className="players-to-watch-team-logos"
                    alt="team-pic"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {props.home.roster.roster
                .filter((player) => player.position.abbreviation === "G")
                .map((player) => {
                  return (
                    <tr
                      key={player.person.id}
                      onClick={() => {
                        test(player.person.id);
                      }}
                    >
                      <td>
                        <img
                          src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                          alt="profile pic"
                          className="table-pic"
                        />{" "}
                        {player.person.fullName} {player.jerseyNumber}
                      </td>
                    </tr>
                  );
                })}
              {props.away.roster.roster
                .filter((player) => player.position.abbreviation === "G")
                .map((player) => {
                  return (
                    <tr key={player.person.id}>
                      <td>
                        <img
                          src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                          alt="profile pic"
                          className="table-pic"
                        />{" "}
                        {player.person.fullName} {player.jerseyNumber}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table> */}

          <ScheduleRoster teams={props.teams} />
        </section>

        <section id="preview-right-col"></section>
      </div>
    );
  }
};
