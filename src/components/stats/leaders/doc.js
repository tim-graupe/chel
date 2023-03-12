import React, { useContext, useState } from "react";
import { LeadersContext } from "../../dispatch/dispatch";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../dispatch/dispatch";
export const TeamLeaders = () => {
  const [leaders, setLeaders] = useContext(LeadersContext);
  const [player, setPlayer, stats, setStats] = useContext(PlayerContext);
  const [playerID, setPlayerID] = useState(null);

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

    fetch(`https://statsapi.web.nhl.com/api/v1/people/${player}`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setPlayer(response.people[0]))
      .catch((err) => console.error(err));
  }

  if (leaders[0] === undefined) {
    return <></>;
  } else {
    return (
      <table id="leaders-table">
        <caption>Team Leaders</caption>
        <thead>
          <th colSpan="2">Points Leaders</th>
        </thead>
        {leaders[0].leaders.map((player) => {
          return (
            <tr>
              <td>
              <Link className="link-style"
                to={`/players/${player.person.id}`}
                onClick={() => {
                  getPlayer(player.person.id);
                }}
              >
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />{" "}
                {player.person.fullName}
              </Link>
              </td>
              <td>{player.value}</td>
            </tr>
          );
        })}

        <thead>
          <th colSpan="2">Goals Scored</th>
        </thead>
        {leaders[1].leaders.map((player) => {
          return (
            <tr>
             <td>
             <Link className="link-style"
                to={`/players/${player.person.id}`}
                onClick={() => {
                  getPlayer(player.person.id);
                }}
              >
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />{" "}
                {player.person.fullName}
              </Link>
             </td>
              <td>{player.value}</td>
            </tr>
          );
        })}

        <thead>
          <th colSpan="2">Assists</th>
        </thead>
        {leaders[2].leaders.map((player) => {
          return (
            <tr>
                <td>
                <Link className="link-style"
                to={`/players/${player.person.id}`}
                onClick={() => {
                  getPlayer(player.person.id);
                }}
              >
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />{" "}
                {player.person.fullName}
              </Link>
                </td>
              <td>{player.value}</td>
            </tr>
          );
        })}

        <thead>
          <th colSpan="2">+/-</th>
        </thead>
        {leaders[3].leaders.map((player) => {
          return (
            <tr>
                <td>
                <Link className="link-style"
                to={`/players/${player.person.id}`}
                onClick={() => {
                  getPlayer(player.person.id);
                }}
              >
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                  alt="profile pic"
                  className="table-pic"
                />{" "}
                {player.person.fullName}
              </Link>
                </td>
              <td>{player.value}</td>
            </tr>
          );
        })}
      </table>
    );
  }
};
