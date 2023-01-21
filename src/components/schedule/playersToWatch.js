import React, {useContext} from "react";
import { PreviewContext } from "../../dispatch/dispatch";


export const PlayersToWatch = () => {
    let [preview, setPreview] = useContext(PreviewContext)
    if (preview === null || preview[0] === undefined || preview[0].teamStats === undefined) {
        return <></>
      } else {

    return (
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
    )
}}