import React, { useEffect, useState } from "react";
import "../../style sheets/standings.css";
export function Conference(props) {
  const [currentConf, setCurrentConf] = useState([]);

  useEffect(() => {
    getConference();
  }, []);
  const getConference = () => {
    if (props.name === "Eastern") {
    fetch("https://statsapi.web.nhl.com/api/v1/standings?expand=standings.conference", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) =>
        setCurrentConf(
          currentConf
            .concat(
              response.records[0].teamRecords,
              response.records[1].teamRecords
            )
            .sort((a, b) => b.pointsPercentage - a.pointsPercentage)
        )
      )
      .catch((err) => console.error(err));
            } else {
              fetch("https://statsapi.web.nhl.com/api/v1/standings?expand=standings.conference", {
                mode: "cors",
              })
                .then((response) => response.json())
                .then((response) =>
                  setCurrentConf(
                    currentConf
                      .concat(
                        response.records[2].teamRecords,
                        response.records[3].teamRecords
                      )
                      .sort((a, b) => b.pointsPercentage - a.pointsPercentage)
                  )
                )
                .catch((err) => console.error(err));



            }
  };
  return (
    <div id="table-container">
      {/* <button
        onClick={() => {
          setWestern(currentConf);
          setCurrentConf(eastern);
        }}
      >
        Eastern
      </button>
      <button
        onClick={() => {
          setEastern(currentConf);
          setCurrentConf(western);
        }}
      >
        Western
      </button> */}
      <table className="standings-table">
        <thead>
          <tr>
            <th scope="col" id="division-row"></th>
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
        {currentConf.map((team) => {
          return (
            <tbody key={team.team.name}>
              <tr>
                <td><img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.team.id}.svg`} alt="team-logo" className="logos"/>{team.team.name}</td>
                <td>{team.leagueRecord.wins}</td>
                <td>{team.leagueRecord.losses}</td>
                <td>{team.leagueRecord.ot}</td>
                <td>{team.gamesPlayed}</td>
                <td>{team.points}</td>
                <td>{team.goalsScored}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.goalsScored-team.goalsAgainst}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
