import React, { useContext, useEffect, useState } from "react";
import { PreviewContext, PlayerContext } from "../../dispatch/dispatch";
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";

export const ScheduleRoster = (props) => {
  const [team, setTeam] = useState("home");
  const [player, setPlayer, stats, setStats] = useContext(PlayerContext);
  const [preview, setPreview] = useContext(PreviewContext);
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([]);
  const [playerID, setPlayerID] = useState(null);

  const id = useParams();

  useEffect(() => {
    if (props.teams[0] === undefined) {
      return;
    } else {
      props.teams[0].roster.roster.forEach((player) => {
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
      props.teams[1].roster.roster.forEach((player) => {
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
    }
  }, [props.teams]);

  useEffect(() => {
    if (
      document.getElementById("home-roster-table") !== null ||
      document.getElementById("home-roster-table") !== null
    )
      if (team === "home") {
        document.getElementById("home-roster-table").style.display = "block";
        document.getElementById("away-roster-table").style.display = "none";
      } else {
        document.getElementById("home-roster-table").style.display = "none";
        document.getElementById("away-roster-table").style.display = "block";
      }
  }, [team]);

  function getPlayer(player) {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${player}/stats?stats=yearByYear&stats=statsSingleSeason&season=20222023&stats=careerRegularSeason`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) =>
        setStats([
          response.stats[0].splits.filter(
            (league) => league.league.name === "National Hockey League"
          ),
          [response.stats[1].splits[0].stat],
          [response.stats[2].splits[0].stat],
        ])
      )
      .then(setPlayerID(player))

      .catch((err) => console.error(err));
  }

  if (props.teams[0] === undefined) {
    return <></>;
  } else {
    return (
      <>
        <table id="home-roster-table" className="roster-table">
          {" "}
          <thead>
            <tr>
              <th>Team Rosters</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
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
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>{" "}
                    <Link
                      className="link-style"
                      to={`/players/${player.person.id}`}
                      onClick={() => {
                        getPlayer(player.person.id);
                      }}
                    >
                      <td>{player.person.fullName}</td>
                    </Link>
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
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>{" "}
                    <Link
                      className="link-style"
                      to={`/players/${player.person.id}`}
                      onClick={() => {
                        getPlayer(player.person.id);
                      }}
                    >
                      <td>{player.person.fullName}</td>
                    </Link>
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
              <th>Goalies</th>
              <th>Pos</th>
              <th>GP</th>
              <th>W</th>
              <th>L</th>
              <th>OT</th>
              <th>GA</th>
              <th>SA</th>
              <th>SV%</th>
              <th>GAA</th>
              <th>SO</th>
              <th>MIN</th>
            </tr>
          </thead>
          <tbody>
            {away.filter((player) => player.position.type === "Goalie" && player.stats[0] !== undefined).map((player) => {
                return (
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>
                    <Link
                      className="link-style"
                      to={`/players/${player.person.id}`}
                      onClick={() => {
                        getPlayer(player.person.id);
                      }}
                    >
                      <td>{player.person.fullName}</td>
                      <td>{player.position.abbreviation}</td>{" "}
                      <td>{player.stats[0].stat.wins}</td>
                      <td>{player.stats[0].stat.losses}</td>
                      <td>{player.stats[0].stat.ot}</td>
                      <td>{player.stats[0].stat.goalsAgainst}</td>
                      <td>{player.stats[0].stat.shotsAgainst}</td>
                      <td>{player.stats[0].stat.savePercentage.toFixed(3)}</td>
                      <td>{Math.round(player.stats[0].stat.goalAgainstAverage  * 100) / 100}</td>
                      <td>{player.stats[0].stat.shutouts}</td>
                      <td>{player.stats[0].stat.timeOnIce}</td>
                    </Link>
                  </tr>
                )
            })}
          </tbody>
        </table>

        <table id="away-roster-table" className="roster-table">
          <thead>
            <tr>
              <th>Team Rosters</th>
            </tr>
          </thead>
          <thead>
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
          </thead>
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
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>{" "}
                    <Link
                      className="link-style"
                      to={`/players/${player.person.id}`}
                      onClick={() => {
                        getPlayer(player.person.id);
                      }}
                    >
                      <td>{player.person.fullName}</td>
                    </Link>
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
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>{" "}
                    <Link
                      className="link-style"
                      to={`/players/${player.person.id}`}
                      onClick={() => {
                        getPlayer(player.person.id);
                      }}
                    >
                      <td>{player.person.fullName}</td>
                    </Link>
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
              <th>Goalies</th>
              <th>Pos</th>
              <th>GP</th>
              <th>W</th>
              <th>L</th>
              <th>OT</th>
              <th>GA</th>
              <th>SA</th>
              <th>SV%</th>
              <th>GAA</th>
              <th>SO</th>
              <th>MIN</th>
            </tr>
          </thead>
          <tbody>
            {home.filter((player) => player.position.type === "Goalie" && player.stats[0] !== undefined).map((player) => {
                return (
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>
                    <Link
                      className="link-style"
                      to={`/players/${player.person.id}`}
                      onClick={() => {
                        getPlayer(player.person.id);
                      }}
                    >
                      <td>{player.person.fullName}</td>
                      <td>{player.position.abbreviation}</td>{" "}
                      <td>{player.stats[0].stat.wins}</td>
                      <td>{player.stats[0].stat.losses}</td>
                      <td>{player.stats[0].stat.ot}</td>
                      <td>{player.stats[0].stat.goalsAgainst}</td>
                      <td>{player.stats[0].stat.shotsAgainst}</td>
                      <td>{player.stats[0].stat.savePercentage.toFixed(3)}</td>
                      <td>{Math.round(player.stats[0].stat.goalAgainstAverage  * 100) / 100}</td>
                      <td>{player.stats[0].stat.shutouts}</td>
                      <td>{player.stats[0].stat.timeOnIce}</td>
                    </Link>
                  </tr>
                )
            })}
          </tbody>
        </table>
      </>
    );
  }
};
