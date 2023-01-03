import React, { useEffect, useState } from "react";
import { Boxscore } from "./boxscore";
import "../../style sheets/schedule.css";
import { Preview } from "./preview";
import { GameCenter } from "./gamecenter";
import { PlayByPlay } from "./playByPlay";

export const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [game, setGame] = useState(null);
  const [content, setContent] = useState(null);
  const [teams, setTeams] = useState([])
  
  const [gameSelected, setGameSelected] = useState(false)
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const getGoalies = (team) => {
    team
      .filter((player) => player.position.abbreviation === "G")
  }

  useEffect(() => {
    const doc = document.getElementById('preview-container')
    const sched = document.getElementById('schedule-container')
    if (gameSelected === false) {
        doc.style.display = 'none'
        sched.style.display ='block'
    } else {
      doc.style.display = 'block'
      sched.style.display ='none'
    }
  }, [gameSelected])

  useEffect(() => {
    const getSchedule = () => {
      fetch(
        `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${date}&endDate=2023-04-16`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) => setSchedule(response.dates))
        .catch((err) => console.error(err));
    };
    getSchedule();
  }, []);

  const getGameInfo = (gamePk) => {
    fetch(`https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setGame(response))
      .catch((err) => console.error(err));
  };

  const getPreviewStats = (away, home) => {
     fetch(`https://statsapi.web.nhl.com/api/v1/teams/?leaders&leaderCategories=points&leaderCategories=goals&leaderCategories=assists&leaderCategories=plusMinus&teamId=${away},${home}&expand=team.roster&expand=team.stats&expand=team.record&expand=team.schedule.next`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setTeams(response.teams))
      .catch((err) => console.error(err))

      fetch (`https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record.overall`)
      .then((response) => response.json())
      .then((response) => console.log(response.records))
      .catch((err) => console.error(err));

  };



  const getContent = (gamePk) => {
    fetch(`http://statsapi.web.nhl.com/api/v1/game/${gamePk}/content`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setContent(response))
      .catch((err) => console.error(err));
  };

  return (
   <>
    <div id="schedule-container">
      {schedule.map((games) => {
        return (
          <div key={games.date}>
            <h1>{games.date}</h1>
            <table id="schedule-day-container">
              <thead>
              <tr>
                <th>Matchup</th>
                <th>Status</th>
                <th>Game Info</th>
              </tr>
              </thead>
            <tbody>
            {games.games.map((game) => {
                return (
                  <tr key={game.gamePk}>
                    <td>
                      {game.teams.away.team.name} @ {game.teams.home.team.name}
                    </td>
                    <td>
                      {game.status.abstractGameState}{" "}
                      <img
                        src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.teams.away.team.id}.svg`}
                        className="schedule-logos"
                        alt="team-pic"
                      />
                      {game.teams.away.score}{" "}
                      
                      {game.teams.home.score}
                      <img
                        src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${game.teams.home.team.id}.svg`}
                        className="schedule-logos"
                        alt="team-pic"
                      />{" "}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          getContent(game.gamePk);
                          getGameInfo(game.gamePk);
                          getPreviewStats(game.teams.away.team.id, game.teams.home.team.id)
                          setGameSelected(true)
                        }}
                      >
                        Preview
                      </button>
                    <button
                    onClick={() => {
                      getGameInfo(game.gamePk)
                      getContent(game.gamePk)
                    }}>GameCenter</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            </table>
          </div>
        );
      })}
    </div>
      <div id="preview-container">
      <Preview content={content} teams={teams} home={teams[0]} away ={teams[1]}setGameSelected={setGameSelected} getGoalies={getGoalies} />
      </div>
      <div id="gamecenter-container">
      <GameCenter game={game} content={content}/>
      </div>

   </>
  );
};
