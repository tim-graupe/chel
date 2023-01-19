import React, { useContext, useState } from "react";
import { Recap } from "./recap";
import { TeamStats } from "./postgameTeamStats";
import { PlayByPlay } from "./playByPlay";
import { GameCenterContext } from "../../dispatch/dispatch";
import { LiveGameStats } from "./liveGameStats";
import { Boxscore } from "./boxscore";
import { ThreeStars } from "./threeStars";

export const PostGame = () => {
const [tab, setTab] = useState("recap")
const game = useContext(GameCenterContext)
return (
    <div id="pg-container">
      <section id="main-postgame-container">
        <div id="post-game-buttons">

       
      <button className="pg-btns" id="recap-btn" onClick={() => setTab('recap')}>Recap</button>
    <button className="pg-btns" id="team-stats-btn" onClick={() => setTab('team-stats')}>Team Stats</button>
    <button className="pg-btns" id="pbp-button" onClick={() => setTab('pbp')}>Play by Play</button>
    </div>
                {tab === 'recap' ? <Recap/> : 
        tab === 'team-stats' ?
        <TeamStats/> :
        tab === 'pbp' ?
        <PlayByPlay /> :
          null
      }
      </section>
      <section id="post-game-right-col">
      <Boxscore/>
      <ThreeStars />

      </section>
    </div>
)
}