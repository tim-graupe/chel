import React, { useEffect, useState } from "react";
import "../../style sheets/standings.css";

export function Division(){
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

  //   const sort = (a, b) =>{
  //     let data = [...standings].sort((a, b) => )
  // }

  return (
    <div id="table-container">
      {standings.map((standing) => {
        return (
          <table>
            <thead>
              <th scope="col" id="division-row"></th>
              <th scope="col">W</th>
              <th scope="col">L</th>
              <th scope="col">OTL</th>
              <th scope="col">GP</th>
              <th scope="col">P</th>
              <th scope="col">G</th>
              <th scope="col">GA</th>
              <th scozpe="col">Diff</th>
            </thead>
            {standing.teamRecords.map((record) => {
              return (
                <tr key={record.team.id}>
                  <td>{record.team.name}</td>
                  <td>{record.leagueRecord.wins}</td>
                  <td>{record.leagueRecord.losses}</td>{" "}
                  <td>{record.leagueRecord.ot}</td>
                  <td>{record.gamesPlayed}</td> <td>{record.points}</td>
                  <td>{record.goalsScored}</td> <td>{record.goalsAgainst} </td>
                  <td>{record.goalsScored - record.goalsAgainst}</td>
                </tr>
              );
            })}
          </table>
        );
      })}
    </div>
  );
};
