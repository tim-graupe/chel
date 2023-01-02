import React, { useEffect, useState } from "react";
import "../../style sheets/standings.css";

export function Division() {
  const [standings, setStandings] = useState([]);
  useEffect(() => {
    const todaysGames = () => {
      fetch("https://statsapi.web.nhl.com/api/v1/standings", {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => setStandings(response.records))
        .catch((err) => console.error(err));
    };
    todaysGames();
  }, []);

  return (
    <div id="table-container">
      {standings.map((standing) => {
        return (
          <table key={standing.division.id}>
            <thead>
              <tr>
                <th scope="col" id="division-row">{standing.division.name}</th>
                <th scope="col">W</th>
                <th scope="col">L</th>
                <th scope="col">OTL</th>
                <th scope="col">GP</th>
                <th scope="col">P</th>
                <th scope="col">G</th>
                <th scope="col">GA</th>
                <th scozpe="col">Diff</th>
              </tr>
            </thead>
            {standing.teamRecords.map((record) => {
              return (
                <tbody key={record.team.id}>
                  <tr>
                    <td><img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${record.team.id}.svg`} alt="team-logo" className="logos"/>{record.team.name}</td>
                    <td>{record.leagueRecord.wins}</td>
                    <td>{record.leagueRecord.losses}</td>
                    <td>{record.leagueRecord.ot}</td>
                    <td>{record.gamesPlayed}</td> <td>{record.points}</td>
                    <td>{record.goalsScored}</td> <td>{record.goalsAgainst}</td>
                    <td>{record.goalsScored-record.goalsAgainst}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        );
      })}
    </div>
  );
}
