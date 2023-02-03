import React, { useContext, useEffect, useState } from "react";
import { PreviewContext } from "../../../dispatch/dispatch";

export const LastTenGames = (props) => {
  let [team, setTeamResults] = useState([]);
  let [teamTen, setTeamTen] = useState([]);

  let today = (new Date()).toISOString().split('T')[0]

  useEffect(() => {
    const awayLastTen = () => {
      fetch(
        "https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record",
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) =>
          setTeamResults(
            response.records
              .filter(
                (team) => team.division.id === props.team.division.id
              )[0]
              .teamRecords.filter(
                (away) => away.team.id === props.team.id
              )[0]
          )
        )
        .catch((err) => console.error(err));
    };

    const getLastTen = () => {
        fetch(
            `https://statsapi.web.nhl.com/api/v1/schedule/?teamId=${props.team.id}&season=20222023`,
            {
              mode: "cors",
            }
          )
            .then((response) => response.json())
            .then((response) => setTeamTen(response.dates.filter(day => day.date <= today).slice(-11, -1).reverse()))
            .catch((err) => console.error(err));
    }

    awayLastTen();
    getLastTen();
  }, [props.team]);
;

  

  if (team.records === undefined || teamTen === undefined) {
    return <></>;
  } else {
    return (
      <table className="last-ten-table">
        <caption>Last  Ten Games</caption>
        <thead>
          <tr>
            <th>
              {" "}
              {team.records.overallRecords[3].wins} -{" "}
              {team.records.overallRecords[3].losses} -{" "}
              {team.records.overallRecords[3].ot}
            </th>
            </tr>
        </thead>
    <tbody>
    {teamTen.map((game) => {
        return (
            <tr key={game.games[0].gamePk}><td><img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.games[0].teams.away.team.id}.svg`} alt="team-logo" className="last-ten-logos"/> {game.games[0].teams.away.score} {game.games[0].teams.home.score} <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.games[0].teams.home.team.id}.svg`} alt="team-logo" className="last-ten-logos"/> </td></tr>
        )
    })}

    </tbody>

      </table>
    );  }
};
