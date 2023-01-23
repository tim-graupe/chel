import React, { useState } from "react";
import { LiveVideos } from "../live game/liveVideos";
import { LiveGameStats } from "../live game/liveGameStats";
import { Boxscore } from "./boxscore";
import { OnIce } from "../live game/OnIce";

export const LiveGame = () => {
  const [tab, setTab] = useState('box')


    return (
      
      <div id="live-game-container">
        <section id="left-live-game-col">
          <div id="live-left-col-nav">
            <button className="live-left-col-nav-buttons" onClick={() => {setTab('box')}}>BOX</button>
            <button className="live-left-col-nav-buttons" onClick={() => { setTab('team-stats')}}>TEAM STATS</button>
            <button className="live-left-col-nav-buttons" onClick={() => {setTab('video')}}>VIDEO</button>
          </div>
        {tab === 'box' ? <Boxscore/> : 
        tab === 'team-stats' ?
        <LiveGameStats/> :
        tab === 'video' ?
        <LiveVideos /> :
          null
      }
   
         </section>
      
          <OnIce />
     
       
      </div>
    );

};
