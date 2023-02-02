import React, { useEffect, useState } from "react";

export const PlayerInfo = (props) => {
const [person, setPerson] = useState(props)


    useEffect(() => {
        const getPlayerStats = (id) => {
            fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`, {
              mode: "cors",
            })
              .then((response) => response.json())
              .then((response) => setPerson(response.people[0]))
              .catch((err) => console.error(err));
          };
        getPlayerStats(props.player.person.id)
    })


    if (person.currentTeam === undefined) {
        return <></>
    } else {
    return (
        <div>
            <img
            src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${person.id}.jpg`}
            alt="profile pic"
            className="table-pic"
          />
          <div id="portrait-info">
            {person.primaryNumber} | {person.fullName} 
          </div>
          <div id="leader-portrait-team-info">
          {person.currentTeam.name} | {person.primaryPosition.code}
          </div>
          <div id="portrait-stat-info">
            {props.stat}
            {props.player.value}
          </div>
        </div>
    )
}}