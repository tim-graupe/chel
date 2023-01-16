import React, { useContext, useState } from "react";
import { Recap } from "./recap";
import { TeamStats } from "./postgameTeamStats";
import { PlayByPlay } from "./playByPlay";
import { GameCenterContext } from "../../dispatch/dispatch";

export const PostGame = () => {
const [tab, setTab] = useState("recap")
const game = useContext(GameCenterContext)
return (
    <div id="pg-container">
    <button id="recap-btn" onClick={() => setTab('recap')}>Recap</button>
    <button id="team-stats-btn" onClick={() => setTab('team-stats')}>Team Stats</button>
    <button id="pbp-button" onClick={() => setTab('pbp')}>Play by Play</button>
                {tab === 'recap' ? <Recap/> : 
        tab === 'team-stats' ?
        <TeamStats/> :
        tab === 'pbp' ?
        <PlayByPlay /> :
          null
      }
    </div>
)
}