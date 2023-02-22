import { GameCenterContext, PlayerContext, RosterContext } from "../../../dispatch/dispatch";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
export const ThreeStars = () => {
  const game = useContext(GameCenterContext);
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
  if (game.gameCenter.gameCenter.liveData.decisions.firstStar === undefined) {
    return <></>;
  }
  return (
    <table id="stars-of-the-game">
      <thead>
        <tr>Stars of the Game</tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <Link
                        className="link-style"
                        to={`/players/${game.gameCenter.gameCenter.liveData.decisions.firstStar.id}`}
                        onClick={() => {
                          getPlayer(game.gameCenter.gameCenter.liveData.decisions.firstStar.id);
                        }}
                      >
            <img
              src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${game.gameCenter.gameCenter.liveData.decisions.firstStar.id}.jpg`}
              alt="profile pic"
              className="table-pic"
            />
            {game.gameCenter.gameCenter.liveData.decisions.firstStar.fullName}
            </Link>
          </td>
        </tr>
        <tr>
          <td>
          <Link
                        className="link-style"
                        to={`/players/${game.gameCenter.gameCenter.liveData.decisions.secondStar.id}`}
                        onClick={() => {
                          getPlayer(game.gameCenter.gameCenter.liveData.decisions.secondStar.id);
                        }}
                      >
            <img
              src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${game.gameCenter.gameCenter.liveData.decisions.secondStar.id}.jpg`}
              alt="profile pic"
              className="table-pic"
            />
            {game.gameCenter.gameCenter.liveData.decisions.secondStar.fullName}
            </Link>
          </td>
        </tr>
        <tr>
          <td>
          <Link
                        className="link-style"
                        to={`/players/${game.gameCenter.gameCenter.liveData.decisions.thirdStar.id}`}
                        onClick={() => {
                          getPlayer(game.gameCenter.gameCenter.liveData.decisions.thirdStar.id);
                        }}
                      >
            <img
              src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${game.gameCenter.gameCenter.liveData.decisions.thirdStar.id}.jpg`}
              alt="profile pic"
              className="table-pic"
            />
            {game.gameCenter.gameCenter.liveData.decisions.thirdStar.fullName}
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
