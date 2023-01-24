import React, { useEffect, useState, useContext } from "react";
import "../../style sheets/standings.css";
import { LeadersContext, RosterContext } from "../../dispatch/dispatch";
import { Link } from "react-router-dom";

export const Division = () => {
  const [roster, setRoster] = useContext(RosterContext);
  const [leaders, setLeaders] = useContext(LeadersContext);
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

  const showRoster = (teamID) => {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/${teamID}/?expand=team.roster`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) => setRoster(response.teams[0].roster.roster))
      .catch((err) => console.error(err));
  };

  const showLeaders = (teamID) => {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/${teamID}/leaders?leaderCategories=points&leaderCategories=goals&leaderCategories=assists&leaderCategories=plusMinus&leaderCategories=wins&leaderCategories=timeOnIcePerGame&season=20222023`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) => setLeaders(response.teamLeaders))
      .catch((err) => console.error(err));
  };

  return (
    <div id="table-container">
      {standings.map((standing) => {
        return (
          <table key={standing.division.id} className="standings-table">
            <thead>
              <tr>
                <th scope="col" id="division-row">
                  {standing.division.name}
                </th>
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
                    <td
                      onClick={() => {
                        showLeaders(record.team.id);
                        showRoster(record.team.id);
                      }}
                    >
                      <Link to="/stats">
                        <img
                          src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${record.team.id}.svg`}
                          alt="team-logo"
                          className="logos"
                        />
                      </Link>
                      {record.team.name}
                    </td>
                    <td>{record.leagueRecord.wins}</td>
                    <td>{record.leagueRecord.losses}</td>
                    <td>{record.leagueRecord.ot}</td>
                    <td>{record.gamesPlayed}</td> <td>{record.points}</td>
                    <td>{record.goalsScored}</td> <td>{record.goalsAgainst}</td>
                    <td>{record.goalsScored - record.goalsAgainst}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        );
      })}
    </div>
  );
};
