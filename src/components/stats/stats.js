import React, { useEffect, useState } from "react";
import "../../style sheets/stats.css";
import { StatsNav } from "./statsnav";
import { TeamStats } from "./teamStats";
import { Roster } from "./roster";
import { TeamLeaders } from "./teamLeaders";
export const Stats = () => {
  const [roster, setRoster] = useState(null)
  const [leaders, setLeaders] = useState([])
  const [team, setTeam] = useState(null);
  const [metro, setMetro] = useState([]);
  const [atlantic, setAtlantic] = useState([]);
  const [central, setCentral] = useState([]);
  const [pacific, setPacific] = useState([]);
  useEffect(() => {
    const getMetro = () => {
      fetch("https://statsapi.web.nhl.com/api/v1/teams", {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) =>
          setMetro(
            response.teams.filter(
              (team) => team.division.name === "Metropolitan"
            )
          )
        )
        .catch((err) => console.error(err));
    };

    const getAtlantic = () => {
      fetch("https://statsapi.web.nhl.com/api/v1/teams", {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) =>
          setAtlantic(
            response.teams.filter((team) => team.division.name === "Atlantic")
          )
        )
        .catch((err) => console.error(err));
    };
    const getCentral = () => {
      fetch("https://statsapi.web.nhl.com/api/v1/teams", {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) =>
          setCentral(
            response.teams.filter((team) => team.division.name === "Central")
          )
        )
        .catch((err) => console.error(err));
    };
    const getPacific = () => {
      fetch("https://statsapi.web.nhl.com/api/v1/teams", {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) =>
          setPacific(
            response.teams.filter((team) => team.division.name === "Pacific")
          )
        )
        .catch((err) => console.error(err));
    };
    getMetro();
    getAtlantic();
    getCentral();
    getPacific();
  }, []);

  const showTeamStats = (teamID) => {

    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}/stats`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setTeam(response.stats))
      .catch((err) => console.error(err));
  };

  const showRoster = (teamID) => {
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}/?expand=team.roster`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setRoster(response.teams[0].roster.roster))
      .catch((err) => console.error(err));
  }

  const showLeaders = (teamID) => {
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}/leaders?leaderCategories=points&leaderCategories=goals&leaderCategories=assists&leaderCategories=plusMinus&leaderCategories=wins&leaderCategories=timeOnIcePerGame&season=20222023`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setLeaders(response.teamLeaders))
      .catch((err) => console.error(err));
  }

  return (
    <div id="main-container">
      <StatsNav
        metro={metro}
        atlantic={atlantic}
        central={central}
        pacific={pacific}
        showTeamStats={showTeamStats}
        showRoster = {showRoster}
        showLeaders={showLeaders}
      />
      <TeamStats team={team} />
      <div id="roster-container">
      <Roster roster={roster}/>
      <TeamLeaders leaders={leaders} />
    </div>
    </div>
  );
};
