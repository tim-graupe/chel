import React, {useContext} from "react";
import { PreviewContext } from "../../../dispatch/dispatch";

export const TeamStatsVs = () => {
const [preview, setPreview] = useContext(PreviewContext)
if (preview === null || preview[0] === undefined || preview[0].teamStats === undefined) {
    return <></>
} else {
    return (
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
    )
}}