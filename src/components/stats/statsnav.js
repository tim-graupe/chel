import React, { useState } from "react";
import { LeadersContext } from "../../dispatch/dispatch";

export const StatsNav = (props) => {

    return (
        <div id="stats-nav-container">
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
                        props.showLeaders(team.id)
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
                        props.showLeaders(team.id)
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
                        props.showLeaders(team.id)
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
                        props.showLeaders(team.id)
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