import React, { useState } from "react";
import { LeadersContext } from "../../dispatch/dispatch";

export const StatsNav = (props) => {

    return (
        <div id="stats-nav-container">
          <div id="list-container">
            <div className="division-container">
              <h1 className="division-name">Metro</h1>
      <div className="division-list">
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
            </div>
    
            <div className="division-container">
              <h1 className="division-name">Atlantic</h1>
              <div className="division-list">
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
            </div>
            <div className="division-container">
              <h1 className="division-name">Central</h1>
              <div className="division-list">
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
            </div>
            <div className="division-container">
              <h1 className="division-name">Pacific</h1>
                <div className="division-list">
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
  
        </div>
      );
}
