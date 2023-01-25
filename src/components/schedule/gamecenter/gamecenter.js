import React, { useContext, useEffect } from "react";
import { GameCenterContext, PreviewContext } from "../../../dispatch/dispatch";
import { PostGame } from "../post game/postGame";
import { Preview } from "../pregame/preview";
import { LiveGame } from "./liveGame";
import { useParams } from "react-router-dom";
export const GameCenter = () => {
  const [preview, setPreview] = useContext(PreviewContext);
  const { gameCenter, setGameCenter, content, setContent } =
    useContext(GameCenterContext);
  const {id, away, home} = useParams();
  useEffect(() => {
    const getGameInfo = (gamePk) => {
      fetch(`https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => setGameCenter({ gameCenter: response }))
        .catch((err) => console.error(err));
    };

    const getContent = (gamePk) => {
      fetch(`http://statsapi.web.nhl.com/api/v1/game/${gamePk}/content`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => setContent({ content: response }))
        .catch((err) => console.error(err));
    };
    if (gameCenter === undefined || gameCenter.gameCenter === undefined) {
      getGameInfo(id.id);
      getContent(id.id);
    }
  }, []);

  if (gameCenter === undefined || gameCenter.gameCenter === undefined ||  gameCenter.gameCenter.gameData === undefined) {
    return <></>;
  }
  if (gameCenter.gameCenter.gameData.status.abstractGameState === "Preview") {
    return (
      <Preview
        away={away}
        home={home}
      />
    );
  } else if (
    gameCenter.gameCenter.gameData.status.abstractGameState === "Final"
  ) {
    return <PostGame />;
  } else if (
    gameCenter.gameCenter.gameData.status.abstractGameState === "Live"
  ) {
    return <LiveGame />;
  }
  return <p>{id.id}</p>;
};
