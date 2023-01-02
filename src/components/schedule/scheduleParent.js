import React from "react";
import { Schedule } from "./schedule";
import { Preview } from "./preview";
import { GameCenter } from "./gamecenter";

export const ScheduleParent = () => {
    return (
        <div id='schedule-parent-container'>
        <div id="schedule-list-container">
            <Schedule />
        </div>
        <div id="game-preview-container">
            <Preview />
        </div>
        <div id="live-and-post-container">
            <GameCenter />
        </div>
        </div>
    )
}