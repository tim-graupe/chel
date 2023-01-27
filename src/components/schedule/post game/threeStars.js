import React, { useContext } from "react";
import { GameCenterContext } from "../../../dispatch/dispatch";
export const ThreeStars = () => {
  const game = useContext(GameCenterContext);
  if (game.gameCenter.gameCenter.liveData.decisions.firstStar === undefined) {
    return <></>
  }
  return (
    <table id="stars-of-the-game">
      <thead>
        <tr>Stars of the Game</tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${game.gameCenter.gameCenter.liveData.decisions.firstStar.id}.jpg`}
              alt="profile pic"
              className="table-pic"
            />
            {game.gameCenter.gameCenter.liveData.decisions.firstStar.fullName}
          </td>
        </tr>
        <tr>
          <td>           
            <img
              src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${game.gameCenter.gameCenter.liveData.decisions.secondStar.id}.jpg`}
              alt="profile pic"
              className="table-pic"
            />
            {game.gameCenter.gameCenter.liveData.decisions.secondStar.fullName}
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${game.gameCenter.gameCenter.liveData.decisions.thirdStar.id}.jpg`}
              alt="profile pic"
              className="table-pic"
            />
            {game.gameCenter.gameCenter.liveData.decisions.thirdStar.fullName}
          </td>
        </tr>
      </tbody>
    </table>
  );
};