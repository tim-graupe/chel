import React, { useContext, useState } from "react";
import { PlayerContext, RosterContext } from "../../dispatch/dispatch";
import { Link } from "react-router-dom";
export const Roster = () => {
  const [playerID, setPlayerID] = useState(null);
  const [player, setPlayer, stats, setStats] = useContext(PlayerContext);
  const [roster, setRoster] = useContext(RosterContext);
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

  if (roster === null) {
    return <></>;
  } else {
    return (
      <div>
        <div id="roster-table">
          <table>
            <caption>Centers</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>No</th>
              </tr>
            </thead>
            {roster
              .filter((player) => player.position.abbreviation === "C")
              .map((player) => {
                return (
                  <tr key={player.person.id}>
                    <td>
                      <Link
                        className="link-style"
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
                    <td>{player.jerseyNumber}</td>
                  </tr>
                );
              })}
          </table>

          <table>
            <caption>Wingers</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>No</th>
              </tr>
            </thead>
            {roster
              .filter(
                (player) =>
                  player.position.abbreviation === "LW" ||
                  player.position.abbreviation === "RW"
              )
              .map((player) => {
                return (
                  <tr
                    key={player.person.id}
                    onClick={() => {
                      getPlayer(player.person.id);
                    }}
                  >
                    <td>
                      <Link
                        className="link-style"
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
                    <td>{player.jerseyNumber}</td>
                  </tr>
                );
              })}
          </table>

          <table>
            <caption>Defensemen</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>No</th>
              </tr>
            </thead>
            {roster
              .filter((player) => player.position.abbreviation === "D")
              .map((player) => {
                return (
                  <tr
                    key={player.person.id}
                    onClick={() => {
                      getPlayer(player.person.id);
                    }}
                  >
                    <td>
                      {" "}
                      <Link
                        className="link-style"
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
                    <td>{player.jerseyNumber}</td>
                  </tr>
                );
              })}
          </table>

          <table>
            <caption>Goalies</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>No</th>
              </tr>
            </thead>
            {roster
              .filter((player) => player.position.abbreviation === "G")
              .map((player) => {
                return (
                  <tr
                    key={player.person.id}
                    onClick={() => {
                      getPlayer(player.person.id);
                    }}
                  >
                      <td>
                      <Link
                      className="link-style"
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
                    <td>{player.jerseyNumber}</td>
                  </tr>
                );
              })}
          </table>
          {/* 
        <PlayerProfile
          playerID={playerID}
          playerStats={playerStats}
          playerBio={playerBio}
        /> */}
        </div>
      </div>
    );
  }
};
