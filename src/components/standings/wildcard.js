import React, { useEffect, useState } from "react";

import "../../style sheets/standings.css";
export function Wildcard(){
  const [leaders, setLeaders] = useState([]);
  const [eastern, setEastern] = useState([]);
  const [western, setWestern] = useState([]);
  const [wildcardEast, setWildcardEast] = useState([]);
  const [wildcardWest, setWildcardWest] = useState([]);

  useEffect(() => {
    getEastern();
    getWestern();
    getLeaders();
    getWildCardEast();
    getWildCardWest();
  }, []);

  const getLeaders = () => {
    fetch("https://statsapi.web.nhl.com/api/v1/standings", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setLeaders(response.records));
  };

  const getEastern = () => {
    fetch("https://statsapi.web.nhl.com/api/v1/standings", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) =>
        setEastern(
          eastern
            .concat(
              response.records[0].teamRecords,
              response.records[1].teamRecords
            )
            .sort((a, b) => b.pointsPercentage - a.pointsPercentage)
        )
      )
      .catch((err) => console.error(err));
  };

  const getWestern = () => {
    fetch("https://statsapi.web.nhl.com/api/v1/standings", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) =>
        setWestern(
          western
            .concat(
              response.records[2].teamRecords,
              response.records[3].teamRecords
            )
            .sort((a, b) => b.points - a.points)
        )
      )
      .catch((err) => console.error(err));
  };

  const getWildCardEast = () => {
    fetch("https://statsapi.web.nhl.com/api/v1/standings", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) =>
        setWildcardEast(
          wildcardEast
            .concat(
              response.records[0].teamRecords,
              response.records[1].teamRecords
            )
            .sort((a, b) => a.wildCardRank - b.wildCardRank)
            .slice(6)
        )
      )
      .catch((err) => console.error(err));
  };

  const getWildCardWest = () => {
    fetch("https://statsapi.web.nhl.com/api/v1/standings", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) =>
        setWildcardWest(
          wildcardWest
            .concat(
              response.records[2].teamRecords,
              response.records[3].teamRecords
            )
            .sort((a, b) => a.wildCardRank - b.wildCardRank)
            .slice(6)
        )
      )
      .catch((err) => console.error(err));
  };

  return (
    <div id="table-container">
      {leaders.map((team) => {
        return (
          <table key={team.division.id}>
            <thead>
              <tr key={team.division.id}>
              <th scope="col" id="division-row">
                {team.division.name}
              </th>
              <th scope="col">W</th>
              <th scope="col">L</th>
              <th scope="col">OTL</th>
              <th scope="col">GP</th>
              <th scope="col">P</th>
              <th scope="col">G</th>
              <th scope="col">GA</th>
              <th scope="col">Diff</th>
              </tr>
            </thead>

            <tbody key={team.division.id}>
              {team.teamRecords.slice(0, 3).map((record) => {
                return (
                  <tr key={record.team.id}>
                    <td><img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${record.team.id}.svg`} alt="team-logo" className="logos"/>{record.team.name}</td>
                    <td>{record.leagueRecord.wins}</td>
                    <td>{record.leagueRecord.losses}</td>
                    <td>{record.leagueRecord.ot}</td>
                    <td>{record.gamesPlayed}</td> <td>{record.points}</td>
                    <td>{record.goalsScored}</td>
                    <td>{record.goalsAgainst} </td>
                    <td>{record.goalsScored - record.goalsAgainst}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })}

      <table>
        <thead>
          <tr>
          <th scope="col" id="division-row">
            Eastern - Wildcard
          </th>
          <th scope="col">W</th>
          <th scope="col">L</th>
          <th scope="col">OTL</th>
          <th scope="col">GP</th>
          <th scope="col">P</th>
          <th scope="col">G</th>
          <th scope="col">GA</th>
          <th scope="col">Diff</th>
          </tr>
        </thead>
        {wildcardEast.map((team) => {
          return (
            <tbody key={team.team.name}>
              <tr id={team.team.id}>
                <td> <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.team.id}.svg`} alt="team-logo" className="logos"/>{team.team.name}</td>
                <td>{team.leagueRecord.wins}</td>
                <td>{team.leagueRecord.losses}</td>
                <td>{team.leagueRecord.ot}</td>
                <td>{team.gamesPlayed}</td> <td>{team.points}</td>
                <td>{team.goalsScored}</td>
                <td>{team.goalsAgainst} </td>
                <td>{team.goalsScored - team.goalsAgainst}</td>
              </tr>
            </tbody>
          );
        })}
      </table>

      <table>
        <thead>
        <tr>
        <th scope="col" id="division-row">
            Western - Wildcard
          </th>
          <th scope="col">W</th>
          <th scope="col">L</th>
          <th scope="col">OTL</th>
          <th scope="col">GP</th>
          <th scope="col">P</th>
          <th scope="col">G</th>
          <th scope="col">GA</th>
          <th scope="col">Diff</th>
        </tr>
        </thead>
        {wildcardWest.map((team) => {
          return (
            <tbody key={team.team.name}>
              <tr key={team.team.id}>
                <td> <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.team.id}.svg`} alt="team-logo" className="logos"/>{team.team.name}</td>
                <td>{team.leagueRecord.wins}</td>
                <td>{team.leagueRecord.losses}</td>
                <td>{team.leagueRecord.ot}</td>
                <td>{team.gamesPlayed}</td> <td>{team.points}</td>
                <td>{team.goalsScored}</td>
                <td>{team.goalsAgainst} </td>
                <td>{team.goalsScored - team.goalsAgainst}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
