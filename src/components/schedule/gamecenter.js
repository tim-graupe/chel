import React, { useContext } from "react";
import { Recap } from "./recap";
import { TeamStats } from "./postgameTeamStats";
import { PlayByPlay } from "./playByPlay";
import { LiveGame } from "./liveGame";
import { LiveVideos } from "./liveVideos";
import { GameCenterContext } from "../../dispatch/dispatch";
import { PostGame } from "./postGame";
export const GameCenter = () => {
const game = useContext(GameCenterContext)


if (game.gameCenter.gameCenter === undefined) {
    return
}
if (game.gameCenter.gameCenter.gameData.status.abstractGameState === "Preview") {
    return <h1>Hi</h1>
} else if (game.gameCenter.gameCenter.gameData.status.abstractGameState === "Final"){ 
    return <PostGame/>
}
//  else {
//     return (
//         <div id="gamecenter-container">
//             <LiveVideos />
//             <LiveGame />
//             <Recap/> 
//             <TeamStats /> 
//             <PlayByPlay /> 
//         </div>
//     )
// }

}