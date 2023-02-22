import React, { useContext, useEffect, useState } from "react";
import rink from "../../../images/rink.png";
import { GameCenterContext } from "../../../dispatch/dispatch";
export const OnIce = (props) => {
  const game = useContext(GameCenterContext);
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([])
  useEffect(() => {
    setAway(
      Object.values(
        game.gameCenter.gameCenter.liveData.boxscore.teams.away.players
      ).filter((player) =>
        game.gameCenter.gameCenter.liveData.boxscore.teams.away.onIce.includes(
          player.person.id
        )
      )
    );

    Object.values(
        game.gameCenter.gameCenter.liveData.boxscore.teams.home.players
      ).filter((player) =>
        game.gameCenter.gameCenter.liveData.boxscore.teams.home.onIce.includes(
          player.person.id
        )
      )


  }, []);
  const drawCanvas = (ref) => {
    if (ref) {
      var ctx = ref.getContext("2d");
      ref.width = 750;
      ref.height = 350;
      ctx.translate(ref.width / 2, ref.height / 2);

      ctx.beginPath();

        var cx = Math.random() * ref.width;
        var cy = Math.random() * ref.height;
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, 7, 0, Math.PI * 2);

      ctx.fillStyle = "red";
      ctx.fill();
    }
  };

    return <canvas ref={drawCanvas}  style={{backgroundImage: `url(${rink})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>
//   Object.values(game.gameCenter.gameCenter.liveData.boxscore.teams.away.players)
//     .filter((player) =>
//       game.gameCenter.gameCenter.liveData.boxscore.teams.away.onIce.includes(
//         player.person.id
//       )
//     )
//     .map((player) => {
//       return <p>{player}</p>;
//     });
};
