import React, { useContext, useEffect, useState } from "react";
import { PreviewContext } from "../../dispatch/dispatch";

export const LastTenGames = (props) => {
  let [preview, setPreview] = useContext(PreviewContext)
  let [away, setAwayResults] = useState([]);
  let [awayTen, setAwayTen] = useState([]);
  let [home, setHomeResults] = useState([]);
  let [homeTen, setHomeTen] = useState([]);

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
          setAwayResults(
            response.records
              .filter(
                (team) => team.division.id === props.teams[0].division.id
              )[0]
              .teamRecords.filter(
                (away) => away.team.id === props.teams[0].id
              )[0]
          )
        )
        .catch((err) => console.error(err));
    };

    const getLastTen = () => {
        fetch(
            `https://statsapi.web.nhl.com/api/v1/schedule/?teamId=${props.teams[0].id}&season=20222023`,
            {
              mode: "cors",
            }
          )
            .then((response) => response.json())
            .then((response) => setAwayTen(response.dates.filter(day => day.date <= today).slice(-11, -1).reverse()))
            .catch((err) => console.error(err));
    }

    awayLastTen();
    getLastTen();
  }, []);

  useEffect(() => {
    const homeLastTen = () => {
      fetch(
        "https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record",
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) =>
          setHomeResults(
            response.records
              .filter(
                (team) => team.division.id === props.teams[1].division.id
              )[0]
              .teamRecords.filter(
                (home) => home.team.id === props.teams[1].id
              )[0]
          )
        )
        .catch((err) => console.error(err));
    };

    const getLastTen = () => {
        fetch(
            `https://statsapi.web.nhl.com/api/v1/schedule/?teamId=${props.teams[1].id}&season=20222023`,
            {
              mode: "cors",
            }
          )
            .then((response) => response.json())
            .then((response) => setHomeTen(response.dates.filter(day => day.date <= today).slice(-11, -1).reverse()))
            .catch((err) => console.error(err));
    }

    homeLastTen();
    getLastTen()
  }, []);

  

  if (away.records === undefined || home.records === undefined || awayTen === undefined || homeTen === undefined) {
    return <></>;
  } else {
    return (
      <table id="last-ten-table">
        
        <thead>
          <tr>
            <th className="last-ten-away">
              {" "}
              {away.records.overallRecords[3].wins} -{" "}
              {away.records.overallRecords[3].losses} -{" "}
              {away.records.overallRecords[3].ot}
            </th>
            <th>Last 10 Record</th>
            <th className="last-ten-home">
              {" "}
              {home.records.overallRecords[3].wins} -{" "}
              {home.records.overallRecords[3].losses} -{" "}
              {home.records.overallRecords[3].ot}
            </th>
          </tr>
        </thead>
    <tbody id="last-ten-away-body">
    {awayTen.map((game) => {
        return (
            <tr key={game.games[0].gamePk}><td className="last-ten-cells"><img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.games[0].teams.away.team.id}.svg`} alt="team-logo" className="last-ten-logos"/> {game.games[0].teams.away.score} {game.games[0].teams.home.score} <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.games[0].teams.home.team.id}.svg`} alt="team-logo" className="last-ten-logos"/> </td></tr>
        )
    })}

    </tbody>

    <tbody id="last-ten-home-body">
    {homeTen.map((game) => {
        return (
            <tr key={game.games[0].gamePk}><td className="last-ten-cells"><img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.games[0].teams.away.team.id}.svg`} alt="team-logo" className="last-ten-logos"/> {game.games[0].teams.away.score} {game.games[0].teams.home.score} <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.games[0].teams.home.team.id}.svg`} alt="team-logo" className="last-ten-logos"/> </td></tr>
        )
    })}

    </tbody>

      </table>
    );
    //fetch api call and filter to show specific team for home/away, pass team id down to this component from props
  }
};
