import React from "react";

export const StatsNav = (props) => {

    return (
        <div id="stats-nav-container">
          <div id="list-container">
            <div className="division-container">
              <h1 className="division-name">Metro</h1>
          <div className="division-teams">
          {props.metro.map((team) => {
                return (
                  <ul key={team.id}>
                    <li
                      onClick={() => {
                        props.showTeamStats(team.id);
                        props.showRoster(team.id)
                        props.showLeaders(team.id)
                      }}
                    >
                      {team.name}
                    </li>
                  </ul>
                );
              })}
          </div>
            </div>
    
            <div className="division-container">
              <h1 className="division-name">Atlantic</h1>
              <div className="division-teams">
              {props.atlantic.map((team) => {
                return (
                  <ul key={team.id}>
                    <li
                      onClick={() => {
                        props.showTeamStats(team.id);
                        props.showRoster(team.id);
                        props.showLeaders(team.id)
                      }}
                    >
                      {team.name}
                    </li>
                  </ul>
                );
              })}
              </div>
            </div>
            <div className="division-container">
              <h1 className="division-name">Central</h1>
<div className="division-teams">
{props.central.map((team) => {
                return (
                  <ul key={team.id}>
                    <li
                      onClick={() => {
                        props.showTeamStats(team.id);
                        props.showRoster(team.id);
                        props.showLeaders(team.id)
                      }}
                    >
                      {team.name}
                    </li>
                  </ul>
                );
              })}
</div>
            </div>
            <div className="division-container">
              <h1 className="division-name">Pacific</h1>
              <div className="division-teams">
              {props.pacific.map((team) => {
                return (
                  <ul key={team.id}>
                    <li
                      onClick={() => {
                        props.showTeamStats(team.id);
                        props.showRoster(team.id);
                        props.showLeaders(team.id)
                      }}
                    >
                      {team.name}
                    </li>
                  </ul>
                );
              })}
              </div>
            </div>
          </div>
  
        </div>
      );
}