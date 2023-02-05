import React, { useContext, useEffect, useState } from "react";
import "../../style sheets/stats.css";
import { StatsNav } from "./statsnav";
import { TeamStats } from "./teamStats";
import { Roster } from "./roster";
import { TeamLeaders } from "./teamLeaders";
import { LeadersContext, RosterContext } from "../../dispatch/dispatch";
import { Leaders } from "./leaders/leadersHome";
export const Stats = () => {
  const [roster, setRoster] = useContext(RosterContext);
  const [leaders, setLeaders] = useContext(LeadersContext);
  const [skaters, setSkaters] = useState('points');
  const [deuce, setDeuce] = useState([])
  const [goalies, setGoalies] = useState('gaa')
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
        {/* <div id="skaters-leader-container">
        <div className="leader-buttons">
          <button onClick={() => {
            setSkaters('points')
          }}>Points</button>

          <button onClick={() => {
            setSkaters("goals")
          }}>Goals</button>

          <button onClick={() => {
            setSkaters('assists')
          }}>Assists</button> */}
        {/* <Leaders stat={skaters} /> */}

        {/* </div> */}

        {/* <div className="leader-buttons">
          <button onClick={() => {
            setGoalies('gaa')
          }}>GAA</button>

          <button onClick={() => {
            setGoalies("savePct")
          }}>SV%</button>

          <button onClick={() => {
            setGoalies('shutouts')
          }}>Shutouts</button> */}
          {/* <Leaders stat={goalies} /> */}
{/* 
        </div>
        </div> */}
        


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
