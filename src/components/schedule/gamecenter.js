import React from "react";
import { Recap } from "./recap";
import { TeamStats } from "./teamStats";
import { PlayByPlay } from "./playByPlay";
import { LiveGame } from "./liveGame";
export const GameCenter = () => {
    return (
        <div id="game-center-container">
            <LiveGame />
            <Recap/>
            <TeamStats />
            <PlayByPlay /> 
        </div>
    )
}