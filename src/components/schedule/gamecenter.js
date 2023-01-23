import React, { useContext, useEffect } from "react";
import { GameCenterContext } from "../../dispatch/dispatch";
import { PostGame } from "./postGame";
import { Preview } from "./preview";
import { LiveGame } from "./liveGame";
import { useParams } from "react-router-dom";
export const GameCenter = () => {
    const {gameCenter, setGameCenter, content, setContent} = useContext(GameCenterContext)
    const id = useParams()
useEffect(() => {

    const getGameInfo = (gamePk) => {
        fetch(`https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`, {
          mode: "cors",
        })
          .then((response) => response.json())
          .then((response) => setGameCenter({gameCenter: response}))
          .catch((err) => console.error(err));
      };

      const getContent = (gamePk) => {
        fetch(`http://statsapi.web.nhl.com/api/v1/game/${gamePk}/content`, {
          mode: "cors",
        })
          .then((response) => response.json())
          .then((response) => setContent({content: response}))
          .catch((err) => console.error(err));
      };
    if (gameCenter === undefined || gameCenter.gameCenter === undefined) {
      getGameInfo(id.id)
      getContent(id.id)

}}, [])


if (gameCenter === undefined || gameCenter.gameCenter === undefined) {
    return <></>
}
if (gameCenter.gameCenter.gameData.status.abstractGameState === "Preview") {
    return <Preview away = {gameCenter.gameCenter.gameData.teams.away.id}  home = {gameCenter.gameCenter.gameData.teams.home.id} />
} else if (gameCenter.gameCenter.gameData.status.abstractGameState === "Final"){ 
    return <PostGame/>
} else if (gameCenter.gameCenter.gameData.status.abstractGameState === "Live") {
    return <LiveGame />
}
return (
  <p>{id.id}</p>
)

}