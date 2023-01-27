import React, { useContext, useEffect, useState } from "react";
import "../../style sheets/stats.css";
import { StatsNav } from "./statsnav";
import { TeamStats } from "./teamStats";
import { Roster } from "./roster";
import { TeamLeaders } from "./teamLeaders";
import { LeadersContext, RosterContext } from "../../dispatch/dispatch";
import { StatsLeaders } from "./statsLeaders";
export const Stats = () => {
  const [roster, setRoster] = useContext(RosterContext);
  const [leaders, setLeaders] = useContext(LeadersContext);
  const [leagueTeams, setLeagueTeams] = useState([])
  const [team, setTeam] = useState(null);

  useEffect(() => {
        const getLeagueTeams = () => {
      fetch("https://statsapi.web.nhl.com/api/v1/teams", {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) =>
          setLeagueTeams(
            response.teams
          )
        )
        .catch((err) => console.error(err));
    };
getLeagueTeams()
  }, [])

  const showTeamStats = (teamID) => {
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}/stats`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setTeam(response.stats))
      .catch((err) => console.error(err));
  };

  const showRoster = (teamID) => {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/${teamID}/?expand=team.roster`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) => setRoster(response.teams[0].roster.roster))
      .catch((err) => console.error(err));
  };

  const showLeaders = (teamID) => {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/${teamID}/leaders?leaderCategories=points&leaderCategories=goals&leaderCategories=assists&leaderCategories=plusMinus&leaderCategories=wins&leaderCategories=gaa&leaderCategories=timeOnIcePerGame&leaderCategories=shutouts&season=20222023`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) => setLeaders(response.teamLeaders))
      .catch((err) => console.error(err));
  };

  return (
    <div id="stats-container">
        {/* <StatsLeaders /> */}

      <StatsNav
      leagueTeams={leagueTeams}
        showTeamStats={showTeamStats}
        showRoster={showRoster}
        showLeaders={showLeaders}
      />



<section id="league-leaders-stats">
</section>
<div id="roster-main">
<TeamStats team={team} />

<div id="roster-container">
  <Roster />
  <TeamLeaders />
</div>
</div>
    </div>
  );
};
