import React from "react";

export const StatsNav = (props) => {
  return (
    <div id="stats-nav-container">
      <div id="list-container">
        <div className="division-container">
          <h1>Team Stats</h1>
          <div className="division-teams">
            <select>
            <option value="" disabled defaultValue hidden>Teams</option>
              {props.leagueTeams.map((team) => {
                return (
                  <option
                    key={team.id}
                    onClick={() => {
                      props.showTeamStats(team.id);
                      props.showRoster(team.id);
                      props.showLeaders(team.id);
                    }}
                  >
                    {team.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        </div>
        </div>

     
  );
};
