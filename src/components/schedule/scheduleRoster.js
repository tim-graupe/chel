import React, { useContext, useEffect, useState } from "react";
import { PreviewContext } from "../../dispatch/dispatch";

export const ScheduleRoster = () => {
  const [team, setTeam] = useState("away");
  const [preview, setPreview] = useContext(PreviewContext);
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([]);

  useEffect(() => {
    preview[0].roster.roster.forEach((player) => {
      fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=20222023`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) =>
          setAway((away) => [
            ...away,
            {
              person: player.person,
              position: player.position,
              jerseyNumber: player.jerseyNumber,
              stats: response.stats[0].splits,
            },
          ])
        )
        .catch((err) => console.error(err));
    });
    preview[1].roster.roster.forEach((player) => {
      fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=20222023`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) =>
          setHome((home) => [
            ...home,
            {
              person: player.person,
              position: player.position,
              jerseyNumber: player.jerseyNumber,
              stats: response.stats[0].splits,
            },
          ])
        )
        .catch((err) => console.error(err));
    });
  }, []);

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
      <table id="home-roster-table" className="roster-table">
        <thead>
          <tr>
            <th>Team Rosters</th>
          </tr>
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
<thead>
<tr>
          <th>#</th>
          <th>Forwards</th>
          <th>Pos</th>
          <th>GP</th>
          <th>A</th>
          <th>P</th>
          <th>+/-</th>
          <th>PIM</th>
          <th>PPG</th>
          <th>GWG</th>
          <th>S</th>
          <th>S%</th>
          <th>FO%</th>
        </tr>
</thead>
        <tbody>
          {away
            .filter(
              (player) =>
                player.position.type === "Forward" &&
                player.stats[0] !== undefined
            )
            .map((player) => {
              return (
                <tr>
                  <td>{player.jerseyNumber}</td>{" "}
                  <td>{player.person.fullName}</td>
                  <td>{player.position.abbreviation}</td>{" "}
                  <td>{player.stats[0].stat.games}</td>
                  <td>{player.stats[0].stat.assists}</td>
                  <td>{player.stats[0].stat.points}</td>
                  <td>{player.stats[0].stat.plusMinus}</td>
                  <td>{player.stats[0].stat.pim}</td>
                  <td>{player.stats[0].stat.powerPlayGoals}</td>
                  <td>{player.stats[0].stat.gameWinningGoals}</td>
                  <td>{player.stats[0].stat.shots}</td>
                  <td>{player.stats[0].stat.shotPct}</td>{" "}
                  <td>{player.stats[0].stat.faceOffPct}</td>
                </tr>
              );
            })}
        </tbody>
<thead>
<tr>
          <th>#</th>
          <th>Defense</th>
          <th>Pos</th>
          <th>GP</th>
          <th>A</th>
          <th>P</th>
          <th>+/-</th>
          <th>PIM</th>
          <th>PPG</th>
          <th>GWG</th>
          <th>S</th>
          <th>S%</th>
          <th>FO%</th>
        </tr>
</thead>
        <tbody>
          {away
            .filter(
              (player) =>
                player.position.type === "Defenseman" &&
                player.stats[0] !== undefined
            )
            .map((player) => {
              return (
                <tr>
                  <td>{player.jerseyNumber}</td>{" "}
                  <td>{player.person.fullName}</td>
                  <td>{player.position.abbreviation}</td>{" "}
                  <td>{player.stats[0].stat.games}</td>
                  <td>{player.stats[0].stat.assists}</td>
                  <td>{player.stats[0].stat.points}</td>
                  <td>{player.stats[0].stat.plusMinus}</td>
                  <td>{player.stats[0].stat.pim}</td>
                  <td>{player.stats[0].stat.powerPlayGoals}</td>
                  <td>{player.stats[0].stat.gameWinningGoals}</td>
                  <td>{player.stats[0].stat.shots}</td>
                  <td>{player.stats[0].stat.shotPct}</td>{" "}
                  <td>{player.stats[0].stat.faceOffPct}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <table id="away-roster-table" className="roster-table">
        <thead>
          <tr>
            <th>Team Rosters</th>
          </tr>
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
<thead>
<tr>
          <th>#</th>
          <th>Forwards</th>
          <th>Pos</th>
          <th>GP</th>
          <th>A</th>
          <th>P</th>
          <th>+/-</th>
          <th>PIM</th>
          <th>PPG</th>
          <th>GWG</th>
          <th>S</th>
          <th>S%</th>
          <th>FO%</th>
        </tr>
</thead>

        <tbody>
          {home
            .filter(
              (player) =>
                player.position.type === "Forward" &&
                player.stats[0] !== undefined
            )
            .map((player) => {
              return (
                <tr>
                  <td>{player.jerseyNumber}</td>{" "}
                  <td>{player.person.fullName}</td>
                  <td>{player.position.abbreviation}</td>{" "}
                  <td>{player.stats[0].stat.games}</td>
                  <td>{player.stats[0].stat.assists}</td>
                  <td>{player.stats[0].stat.points}</td>
                  <td>{player.stats[0].stat.plusMinus}</td>
                  <td>{player.stats[0].stat.pim}</td>
                  <td>{player.stats[0].stat.powerPlayGoals}</td>
                  <td>{player.stats[0].stat.gameWinningGoals}</td>
                  <td>{player.stats[0].stat.shots}</td>
                  <td>{player.stats[0].stat.shotPct}</td>{" "}
                  <td>{player.stats[0].stat.faceOffPct}</td>
                </tr>
              );
            })}
        </tbody>

<thead>
<tr>
          <th>#</th>
          <th>Defense</th>
          <th>Pos</th>
          <th>GP</th>
          <th>A</th>
          <th>P</th>
          <th>+/-</th>
          <th>PIM</th>
          <th>PPG</th>
          <th>GWG</th>
          <th>S</th>
          <th>S%</th>
          <th>FO%</th>
        </tr>
</thead>
        <tbody>
          {home
            .filter(
              (player) =>
                player.position.type === "Defenseman" &&
                player.stats[0] !== undefined
            )
            .map((player) => {
              return (
                <tr>
                  <td>{player.jerseyNumber}</td>{" "}
                  <td>{player.person.fullName}</td>
                  <td>{player.position.abbreviation}</td>{" "}
                  <td>{player.stats[0].stat.games}</td>
                  <td>{player.stats[0].stat.assists}</td>
                  <td>{player.stats[0].stat.points}</td>
                  <td>{player.stats[0].stat.plusMinus}</td>
                  <td>{player.stats[0].stat.pim}</td>
                  <td>{player.stats[0].stat.powerPlayGoals}</td>
                  <td>{player.stats[0].stat.gameWinningGoals}</td>
                  <td>{player.stats[0].stat.shots}</td>
                  <td>{player.stats[0].stat.shotPct}</td>{" "}
                  <td>{player.stats[0].stat.faceOffPct}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
