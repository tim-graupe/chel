import React, { useContext, useState } from "react";
import { GameCenterContext } from "../../../dispatch/dispatch";

export const LiveVideos = () => {
  const game = useContext(GameCenterContext);
  const highlights = game.content.content.highlights.scoreboard.items;
  const [highlight, setHighlight] = useState("");
  return (
    <ul id="live-videos-containers">
      <video controls id="highlight-video" key={highlight}>
        <source
          src={highlight}
          title="highlight"
          type="video/mp4"
          height={highlight.height}
          width={highlight.width}
        />
      </video>
      {highlights.map((video) => {
        return (
          <li key={video.title}>
            <video
              src={video.playbacks[1].url}
              onClick={() => {
                setHighlight(video.playbacks[2].url);
              }}
              playsInline
            />
            <p>{video.title}</p>
          </li>
        );
      })}
    </ul>
  );
};
