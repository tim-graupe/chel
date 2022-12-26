import React, { useState } from "react";

export const StatsNav = (props) => {
const [leaders, setLeaders] = useState([])
const showLeaders = (teamID) =>{

  fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}/?expand=team.roster`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((response) => setLeaders(response.teams[0].roster.roster))
    
    .catch((err) => console.error(err));

  
}
    return (
        <div id="container">
          <div id="list-container">
            <div className="division-container">
              <h1>Metropolitan</h1>
              {props.metro.map((team) => {
                return (
                  <div key={team.id}>
                    <p
                      onClick={() => {
                        props.showTeamStats(team.id);
                        props.showRoster(team.id)
                        props.showGoalLeaders(team.id)
                      }}
                    >
                      {team.name}
                    </p>
                  </div>
                );
              })}
            </div>
    
            <div className="division-container">
              <h1>Atlantic</h1>
              {props.atlantic.map((team) => {
                return (
                  <div key={team.id}>
                    <p
                      onClick={() => {
                        props.showTeamStats(team.id);
                        props.showRoster(team.id);
                        props.showGoalLeaders(team.id)
                      }}
                    >
                      {team.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="division-container">
              <h1>Central</h1>
              {props.central.map((team) => {
                return (
                  <div key={team.id}>
                    <p
                      onClick={() => {
                        props.showTeamStats(team.id);
                        props.showRoster(team.id);
                        props.showGoalLeaders(team.id)
                      }}
                    >
                      {team.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="division-container">
              <h1>Pacific</h1>
              {props.pacific.map((team) => {
                return (
                  <div key={team.id}>
                    <p
                      onClick={() => {
                        props.showTeamStats(team.id);
                        props.showRoster(team.id);
                        props.showGoalLeaders(team.id)
                      }}
                    >
                      {team.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
  
        </div>
      );
}