import React, { useContext, useState } from "react";
import { PlayerProfile } from "./playerProfile";
import { LeadersContext, RosterContext } from "../../dispatch/dispatch";
export const Roster = () => {
  const [playerID, setPlayerID] = useState(null);
  const [playerBio, setPlayerBio] = useState(null);
  const [playerStats, setPlayerStats] = useState([]);
  const [leaders, setLeaders] = useContext(LeadersContext)
  const [roster, setRoster] = useContext(RosterContext)
  function test(player) {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${player}/stats?stats=yearByYear`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) =>
        setPlayerStats(
          response.stats[0].splits.filter(
            (league) => league.league.name === "National Hockey League"
          )
        )
      )
      .then(setPlayerID(player))
      .catch((err) => console.error(err));

    fetch(`https://statsapi.web.nhl.com/api/v1/people/${player}`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setPlayerBio(response.people[0]))
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
                    <img
                      src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                      alt="profile pic"
                      className="table-pic"
                    />{" "}
                    {player.person.fullName}
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
                    test(player.person.id);
                  }}
                >
                  <td>
                    <img
                      src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                      alt="profile pic"
                      className="table-pic"
                    />{" "}
                    {player.person.fullName}
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
                    test(player.person.id);
                  }}
                >
                  <td>
                    <img
                      src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                      alt="profile pic"
                      className="table-pic"
                    />{" "}
                    {player.person.fullName}
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
                    test(player.person.id);
                  }}
                >
                  <td>
                    <img
                      src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                      alt="profile pic"
                      className="table-pic"
                    />{" "}
                    {player.person.fullName}
                  </td>
                  <td>{player.jerseyNumber}</td>
                </tr>
              );
            })}
        </table>

        <PlayerProfile
          playerID={playerID}
          playerStats={playerStats}
          playerBio={playerBio}
        />
      </div>
      </div>
    );
  }
};
