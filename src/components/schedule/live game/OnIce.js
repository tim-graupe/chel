import React, { useContext, useEffect, useState } from "react";
import rink from "../../../images/rink.png";
import { GameCenterContext } from "../../../dispatch/dispatch";
export const OnIce = (props) => {
  const game = useContext(GameCenterContext);
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([]);

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
    );
  }, []);
  const drawCanvas = (ref) => {
    //left coords:
    //C: x -50, y: 0
    //LW: x -50 y: -100
    //RW: x -50, y 100
    //G: x-300 y 0

    //right coords:
    // C x 50 y 0
    //LW x 50 y 100
    //RW x 50 y -100
    //G x 300 y 0
    if (ref) {
      var ctx = ref.getContext("2d");
      ref.width = 750;
      ref.height = 350;
      ctx.translate(ref.width / 2, ref.height / 2);

      ctx.beginPath();
      let homeForwardCoords = [0, 40, 80, 120]
      let awayDefenseCoords = [0, 50, -50, 100]
      for (let i = 0; i < away.length; i++) {
        if (away[i].position.type === "Forward") {
          let image = new Image();
          image.src = `http://nhl.bamcontent.com/images/headshots/current/168x168/${away[i].person.id}.jpg`;
        
          let cx = 0;
          let cy = homeForwardCoords[i]
          console.log(cx, cy)
          ctx.moveTo(cx, cy);
          ctx.drawImage(image, cx, cy, 50, 50);
        } else if (away[i].position.type === "Defenseman") {
          let image = new Image();
          image.src = `http://nhl.bamcontent.com/images/headshots/current/168x168/${away[i].person.id}.jpg`;
          let cx = 0;
          let cy = awayDefenseCoords[i]
          ctx.moveTo(cx, cy);
          ctx.drawImage(image, cx, cy, 50, 50);
        } else if (away[i].position.type === "Goalie") {
          let image = new Image();
          image.src = `http://nhl.bamcontent.com/images/headshots/current/168x168/${away[i].person.id}.jpg`;
          let cx = 300;
          let cy = 0;
          ctx.moveTo(cx, cy);
          ctx.drawImage(image, cx, cy, 50, 50);
        }
      }

      for (let i = 0; i < home.length; i++) {
        if (home[i].position.type === "Forward") {
          let image = new Image();
          image.src = `http://nhl.bamcontent.com/images/headshots/current/168x168/${home[i].person.id}.jpg`;
        
          let cx = 0;
          let cy = homeForwardCoords[i]
          ctx.moveTo(cx, cy);
          ctx.drawImage(image, cx, cy, 50, 50);
        } else if (home[i].position.type === "Defenseman") {
          let image = new Image();
          image.src = `http://nhl.bamcontent.com/images/headshots/current/168x168/${home[i].person.id}.jpg`;
          // let cx = 0;
          // let cy = coords[i]
          // ctx.moveTo(cx, cy);
          // ctx.drawImage(image, cx, cy, 50, 50);
        } else if (away[i].position.type === "Goalie")  {
          let image = new Image();
          image.src = `http://nhl.bamcontent.com/images/headshots/current/168x168/${home[i].person.id}.jpg`;
          let cx = -300;
          let cy = 0
          ctx.moveTo(cx, cy);
          ctx.drawImage(image, cx, cy, 50, 50);
        }
      }

      // away.forEach((player) => {
      //   if (player.position.type === "Forward") {
      //     let image = new Image();
      //     image.src = `http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`;
      //     forwards.push(player)
      //     var cx = 0;
      //     var cy = [0, -100, 100, 50][Math.floor(Math.random() * forwards.length) + 50]
      //     ctx.moveTo(cx, cy);
      //     ctx.drawImage(image, cx, cy, 50, 50);
      //   }
      // });

      ctx.fillStyle = "red";
      ctx.fill();
    }
  };

  return (

    <h1>Live is tracker, work in progress</h1>
    // <canvas
    //   ref={drawCanvas}
    //   style={{
    //     backgroundImage: `url(${rink})`,
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //   }}
    // />
  );
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
