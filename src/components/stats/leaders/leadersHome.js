import React, { useEffect, useState } from "react";
import { PlayerInfo } from "./playerInfo";

export const Leaders = (props) => {
  const [leaders, setLeaders] = useState({ current: "", list: [] });
  const [all, setAll] = useState([])
  const [season, setSeason] = useState("20222023");

  // useEffect(() => {
  //   const getLeaders = () => {
  //     fetch(
  //       `https://statsapi.web.nhl.com/api/v1/stats/leaders?leaderCategories=${props.stat}&season=${season}&limit=10`,
  //       {
  //         mode: "cors",
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((response) =>
  //         setLeaders({
  //           current: response.leagueLeaders[0].leaders[0],
  //           list: response.leagueLeaders[0].leaders
  //         })
  //       )
  //       .catch((err) => console.error(err));

      

  //   };


  //   getLeaders();
  // }, []);



  if (leaders === undefined || leaders.current.person === undefined) {
    return <></>;
  } else {
    return (
      <div id="leaders-container">
        <PlayerInfo player={leaders.current} stat={props.stat} />
        <ul id="leader-list">
          {leaders.list.map((skater) => {
            return (
              <li
                key={skater.person.id}
                onMouseOver={() => {
                  setLeaders({ current: skater, list: leaders.list });
                }}
              >
                {skater.person.fullName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
