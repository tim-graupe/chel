import React, { useContext, useEffect, useState } from "react";
import { PreviewContext } from "../../dispatch/dispatch";

export const ScheduleRoster = () => {
  const [team, setTeam] = useState("away");
  const [preview, setPreview] = useContext(PreviewContext)

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
            {preview[0].teamName}
          </td>
          <td
            onClick={() => {
              setTeam("away");
            }}
          >
            {preview[1].teamName}
          </td>
        </tr>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Pos</td>
        </tr>
        <tbody>
          {preview[0].roster.roster.map((team) => {
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
          {preview[1].roster.roster.map((team) => {
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
            {preview[0].teamName}
          </td>
          <td
            onClick={() => {
              setTeam("away");
            }}
          >
            {preview[1].teamName}
          </td>
        </tr>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Pos</td>
        </tr>
        <tbody>
          {preview[1].roster.roster.map((team) => {
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
