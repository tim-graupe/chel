import React, {useContext, useEffect} from "react";
import { GameCenterContext } from "../../../dispatch/dispatch";
import rink from '../../../images/rink.png'
export const PlayMap = () => {
    const { gameCenter, setGameCenter, content, setContent } =
    useContext(GameCenterContext);//game.gameCenter.gameCenter.liveData.plays.allPlays(coordinates)

if (gameCenter === undefined) {
    return <></>
}
// return (
//     <canvas id="rink-canvas" width="50" height="25" style={{backgroundImage: `url(${rink})`, zIndex: 1}}>
//          {gameCenter.gameCenter.liveData.plays.allPlays.map((coord) => {
//                             let c = document.getElementById('rink-canvas');
//                             let ctx = c.getContext('2d');
//                             ctx.beginPath();
//                             ctx.rect(coord.coordinates.x, coord.coordinates.y, 5, 5)
//                             ctx.stroke()
//          })}
//          </canvas>
// )
}