import React, { useEffect, useState } from "react";

import "../../style sheets/standings.css";
export function League(){
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    getLeague();
  }, []);

  const getLeague = () => {
    fetch("https://statsapi.web.nhl.com/api/v1/standings", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) =>
        setLeaders(
          leaders
            .concat(
              response.records[0].teamRecords,
              response.records[1].teamRecords,
              response.records[2].teamRecords,
              response.records[3].teamRecords
            )
            .sort((a, b) => b.points - a.points)
        )
      );
  };

  return (
    <div id="table-container">
      <table>
        <thead>
          <th scope="col" id="division-row">
            {/* {team.division.name} */}
          </th>
          <th scope="col">W</th>
          <th scope="col">L</th>
          <th scope="col">OTL</th>
          <th scope="col">GP</th>
          <th scope="col">P</th>
          <th scope="col">G</th>
          <th scope="col">GA</th>
          <th scope="col">Diff</th>
        </thead>

        <tbody>
          {leaders.map((team) => {
            return (
              <tr>
                <td>{team.team.name}</td>
                <td>{team.leagueRecord.wins}</td>
                <td>{team.leagueRecord.losses}</td>
                <td>{team.leagueRecord.ot}</td>
                <td>{team.gamesPlayed}</td>
                <td>{team.points}</td>
                <td>{team.goalsScored}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.goalsScored - team.goalsAgainst}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
