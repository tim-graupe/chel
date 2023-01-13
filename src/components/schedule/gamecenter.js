import React from "react";
import { Recap } from "./recap";
import { TeamStats } from "./teamStats";
import { PlayByPlay } from "./playByPlay";
import { LiveGame } from "./liveGame";
import { LiveVideos } from "./liveVideos";
export const GameCenter = () => {
    return (
        <div id="gamecenter-container">
            <LiveVideos />
            {/* <LiveGame /> */}
            {/* <Recap/>
            <TeamStats /> 
            <PlayByPlay />  */}
        </div>
    )
}