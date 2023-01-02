import React, { useEffect, useState } from "react";

export const ScheduleRoster = (props) => {
  const [team, setTeam] = useState("away");

  useEffect(() => {
    const changeTable = () => {
      if (team === "home") {
        document.getElementById("home-roster-table").style.display = "block";
        document.getElementById("away-roster-table").style.display = "none";
      } else {
        document.getElementById("home-roster-table").style.display = "none";
        document.getElementById("away-roster-table").style.display = "block";
      }
    };
    changeTable();
  }, [team]);

  return (
    <>
      <table id="home-roster-table">
        <thead>
          <tr><th>Team Rosters</th></tr>
        </thead>
        <tr>
          <td
            onClick={() => {
              setTeam("home");
            }}
          >
            {props.teams[0].teamName}
          </td>
          <td
            onClick={() => {
              setTeam("away");
            }}
          >
            {props.teams[1].teamName}
          </td>
        </tr>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Pos</td>
        </tr>
        <tbody>
          {props.teams[0].roster.roster.map((team) => {
            return (
              <tr>
                <td>{team.jerseyNumber}</td>
                <td>{team.person.fullName}</td>
                <td>{team.position.abbreviation}</td>
              </tr>
            );
          })}
        </tbody>
        <tbody id="home-roster-table">
          {props.teams[1].roster.roster.map((team) => {
            return (
              <tr>
                <td>{team.jerseyNumber}</td>
                <td>{team.person.fullName}</td>
                <td>{team.position.abbreviation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table id="away-roster-table">
      <thead>
          <tr><th>Team Rosters</th></tr>
        </thead>
        <tr>
          <td
            onClick={() => {
              setTeam("home");
            }}
          >
            {props.teams[0].teamName}
          </td>
          <td
            onClick={() => {
              setTeam("away");
            }}
          >
            {props.teams[1].teamName}
          </td>
        </tr>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Pos</td>
        </tr>
        <tbody>
          {props.teams[1].roster.roster.map((team) => {
            return (
              <tr>
                <td>{team.jerseyNumber}</td>
                <td>{team.person.fullName}</td>
                <td>{team.position.abbreviation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
