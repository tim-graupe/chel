import React, { useEffect, useState } from "react";
import { Boxscore } from "./boxscore";
import '../../style sheets/schedule.css'

export const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [game, setGame] = useState(null);
  const [status, setStatus] =useState(null)
  const [content, setContent] = useState(null)

  useEffect(() => {
    const getSchedule = () => {
      fetch(
        "https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.broadcasts&expand=schedule.linescore",
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) => setSchedule(response.dates[0].games))
        .catch((err) => console.error(err));
    };
    getSchedule();
  }, []);

  const getGameInfo = (gamePk) => {
    setStatus('post')
    fetch(`https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setGame(response))
      .catch((err) => console.error(err));
  };

  const getPreviewStats = (gamePk) => {
    setStatus('pre')
    fetch(`http://statsapi.web.nhl.com/api/v1/game/${gamePk}/content`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setGame(response))
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
  

  return (<div id="container">
    <div id="schedule-container">
      {schedule.map((game) => {
        return (
          <ul className="schedule-cards">
            <li>
              <h4 className="schedule-card-status">
                {game.status.detailedState}{" "}
                {game.linescore.currentPeriodTimeRemaining}{" "}
                {game.linescore.currentPeriodOrdinal}
              </h4>
              <p>
                {game.teams.away.team.name} {game.teams.away.score}
              </p>
              <p>
                {game.teams.home.team.name} {game.teams.home.score}
              </p>
              <p>{game.venue.name}</p>
              {/* {game.broadcasts.map((broadcast) => {
                return (
                  <>
                    <p>
                      {broadcast.type.toUpperCase()}: {broadcast.name}
                    </p>
                  </>
                );
              })} */}
              <button
                id="box-score"
                onClick={() => {
                  getGameInfo(game.gamePk)
                  getContent(game.gamePk)
                }}
              >
                Box Score
              </button>

              <button
                id="preview"
                onClick={() => {
                  getPreviewStats(game.gamePk)
                  getContent(game.gamePk)
                }}
              >
                Preview
              </button>
            </li>
          </ul>
        );
      })}
    <div id="box-scorer">
    <Boxscore game={game} content={content} />


    </div>
    </div>
    </div>
  );
};
