import React, { useContext} from "react";
import { ScheduleRoster } from "./scheduleRoster";
import {  PreviewContext } from "../../dispatch/dispatch";
import {  SeasonSeries } from "./seasonSeries";
import { PreviousGame } from "./previousGame";

export const Preview = () => {
const [preview, setPreview] = useContext(PreviewContext)
if (preview === null || preview[0] === undefined) {
  return <></>
} else {
    return (
      <div id="preview-container">
        <section className="preview-col" id="preview-left-col">
          <table id="team-stats-table">
            <thead id="team-stats-header">
              <tr>
                <th>
                  {" "}
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${preview[0].id}.svg`}
                    className="preview-table-stats-logos"
                    alt="team-pic"
                  />{" "}
                </th>
                <th>Team Stats</th>
                <th>
                  {" "}
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${preview[1].id}.svg`}
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
                    {preview[0].teamStats[0].splits[0].stat.powerPlayPercentage}
                  </h4>
                  {preview[0].teamStats[0].splits[1].stat.powerPlayPercentage}
                </td>
                <td className="players-to-watch"> Power Play % </td>
                <td className="players-to-watch">
                  <h4>
                    {preview[1].teamStats[0].splits[0].stat.powerPlayPercentage}
                  </h4>
                  {preview[1].teamStats[0].splits[1].stat.powerPlayPercentage}
                </td>
              </tr>

              <tr>
                <td className="players-to-watch">
                  <h4>
                    {
                      preview[0].teamStats[0].splits[0].stat
                        .penaltyKillPercentage
                    }
                  </h4>
                  {preview[0].teamStats[0].splits[1].stat.penaltyKillPercentage}
                </td>
                <td className="players-to-watch"> Penalty Kill % </td>
                <td className="players-to-watch">
                  <h4>
                    {
                      preview[1].teamStats[0].splits[0].stat
                        .penaltyKillPercentage
                    }
                  </h4>
                  {preview[1].teamStats[0].splits[1].stat.penaltyKillPercentage}
                </td>
              </tr>

              <tr>
                <td className="players-to-watch">
                  <h4>
                    {
                      preview[0].teamStats[0].splits[0].stat
                        .faceOffWinPercentage
                    }
                  </h4>
                  {preview[0].teamStats[0].splits[1].stat.faceOffWinPercentage}
                </td>
                <td className="players-to-watch"> Faceoff % </td>
                <td className="players-to-watch">
                  <h4>
                    {
                      preview[1].teamStats[0].splits[0].stat
                        .faceOffWinPercentage
                    }
                  </h4>
                  {preview[1].teamStats[0].splits[1].stat.faceOffWinPercentage}
                </td>
              </tr>

              <tr>
                <td className="players-to-watch">
                  <h4>{preview[0].teamStats[0].splits[0].stat.goalsPerGame}</h4>
                  {preview[0].teamStats[0].splits[1].stat.goalsPerGame}
                </td>
                <td className="players-to-watch"> GF / GP </td>
                <td className="players-to-watch">
                  <h4>{preview[1].teamStats[0].splits[0].stat.goalsPerGame}</h4>
                  {preview[1].teamStats[0].splits[1].stat.goalsPerGame}
                </td>
              </tr>

              <tr>
                <td className="players-to-watch">
                  <h4>
                    {preview[0].teamStats[0].splits[0].stat.goalsAgainstPerGame}
                  </h4>
                  {preview[0].teamStats[0].splits[1].stat.goalsAgainstPerGame}
                </td>
                <td className="players-to-watch"> GA / GP </td>
                <td className="players-to-watch">
                  <h4>
                    {preview[1].teamStats[0].splits[0].stat.goalsAgainstPerGame}
                  </h4>
                  {preview[1].teamStats[0].splits[1].stat.goalsAgainstPerGame}
                </td>
              </tr>
            </tbody>
          </table>

        </section>
        <section className="preview-col" id="preview-mid-col">
          <table id="players-to-watch-table">
            <thead>
              <tr>
                <th>
                  {" "}
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${preview[0].id}.svg`}
                    className="players-to-watch-team-logos"
                    alt="team-pic"
                  />
                </th>
                <th>Players to Watch</th>
                <th>
                  {" "}
                  <img
                    src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${preview[1].id}.svg`}
                    className="players-to-watch-team-logos"
                    alt="team-pic"
                  />
                </th>
              </tr>
            </thead>
            <tr>
              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${preview[0].teamLeaders[0].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {preview[0].teamLeaders[0].leaders[0].person.fullName}
              </td>

              <td className="players-to-watch">
                {preview[0].teamLeaders[0].leaders[0].value}{" "}
                {preview[0].teamLeaders[0].leaderCategory}{" "}
                {preview[1].teamLeaders[0].leaders[0].value}{" "}
              </td>

              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${preview[1].teamLeaders[0].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {preview[1].teamLeaders[0].leaders[0].person.fullName}
              </td>
            </tr>

            <tr>
              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${preview[0].teamLeaders[1].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {preview[0].teamLeaders[1].leaders[0].person.fullName}
              </td>

              <td className="players-to-watch">
                {preview[0].teamLeaders[1].leaders[0].value}{" "}
                {preview[0].teamLeaders[1].leaderCategory}{" "}
                {preview[1].teamLeaders[1].leaders[0].value}{" "}
              </td>

              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${preview[1].teamLeaders[0].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {preview[1].teamLeaders[0].leaders[0].person.fullName}
              </td>
            </tr>

            <tr>
              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${preview[0].teamLeaders[2].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {preview[0].teamLeaders[2].leaders[0].person.fullName}
              </td>

              <td className="players-to-watch">
                {preview[0].teamLeaders[2].leaders[0].value}{" "}
                {preview[0].teamLeaders[2].leaderCategory}{" "}
                {preview[1].teamLeaders[2].leaders[0].value}{" "}
              </td>

              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${preview[1].teamLeaders[0].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {preview[1].teamLeaders[0].leaders[0].person.fullName}
              </td>
            </tr>

            <tr>
              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${preview[0].teamLeaders[3].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {preview[0].teamLeaders[3].leaders[0].person.fullName}
              </td>

              <td className="players-to-watch">
                {preview[0].teamLeaders[3].leaders[0].value}{" "}
                {preview[0].teamLeaders[3].leaderCategory}{" "}
                {preview[1].teamLeaders[3].leaders[0].value}{" "}
              </td>

              <td className="players-to-watch">
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${preview[1].teamLeaders[0].leaders[0].person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />
                {preview[1].teamLeaders[0].leaders[0].person.fullName}
              </td>
            </tr>
          </table>

          <ScheduleRoster />
        </section>

        <section className="preview-col" id="preview-right-col">
          <PreviousGame />
          <SeasonSeries />
          
        </section>
      </div>
    );
 }
}