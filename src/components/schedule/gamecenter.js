import React from "react";
import { Recap } from "./recap";
import { TeamStats } from "./teamStats";

export const GameCenter = (props) => {
    return (
        <div id="game-center-container">
            {/* <Recap props={props}/> */}
            <TeamStats props={props} />
        </div>
    )
}