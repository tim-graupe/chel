import React, { useContext, useEffect, useState } from "react";
import { GameCenterContext } from "../../../dispatch/dispatch";
// import rink from "../../images/rink.png";
export const OnIce = () => {
  const game = useContext(GameCenterContext);
  // const [awayOnIce, setAwayOnIce] = useState([])
  // const [homeOnIce, setHomeOnIce] = useState([])


  // const [awayLW, setAwayLW] = useState([])

  // useEffect(() => {
  //   setAwayOnIce(Object.values(game.gameCenter.gameCenter.liveData.boxscore.teams.away.players).filter(player => game.gameCenter.gameCenter.liveData.boxscore.teams.away.onIce.includes(player.person.id)))
  //   setAwayLW(Object.values(game.gameCenter.gameCenter.liveData.boxscore.teams.away.players).filter(player => game.gameCenter.gameCenter.liveData.boxscore.teams.away.onIce.includes(player.person.id)  && player.position.code === "D"))


  //   setHomeOnIce(Object.values(game.gameCenter.gameCenter.liveData.boxscore.teams.home.players).filter(player => game.gameCenter.gameCenter.liveData.boxscore.teams.home.onIce.includes(player.person.id)))

  // }, [])
  // const handleClick = (event) => {
  //   const rink = document.getElementById('live-rink')
  //       console.log(event.nativeEvent.offsetX  / window.innerWidth * 100);
  //       console.log(event.nativeEvent.offsetY / window.innerHeight * 100);
  // };


  // return (
  //   <div  id="rink-container">
  //     <img
  //       src={rink}
  //       alt="rink"
  //       id="live-rink"
  //       onClick={(e) => {
  //         handleClick(e);
  //       }}
  //     />
  //     <div id="home-LW">LW</div>
  //   </div>
  // );
    }

//   <img
//                       src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
//                       alt="profile pic"
//                       className="table-pic"
//                     />{" "}
