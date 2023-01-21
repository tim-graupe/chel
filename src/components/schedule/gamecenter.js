import React, { useContext } from "react";
import { GameCenterContext } from "../../dispatch/dispatch";
import { PostGame } from "./postGame";
import { Preview } from "./preview";
import { LiveGame } from "./liveGame";
export const GameCenter = () => {
  const game = useContext(GameCenterContext);
  if (game.gameCenter.gameCenter === undefined) {
    return;
}
if (game.gameCenter.gameCenter.gameData.status.abstractGameState === "Preview") {
    return <Preview />
} else if (game.gameCenter.gameCenter.gameData.status.abstractGameState === "Final"){ 
    return <PostGame/>
} else {
    return <LiveGame />
}
};
