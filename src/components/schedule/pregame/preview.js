import React, { useContext, useEffect } from "react";
import { ScheduleRoster } from "../scheduleRoster";
import { GameCenterContext, PreviewContext } from "../../../dispatch/dispatch";
import { SeasonSeries } from "./seasonSeries";
import { PreviousGame } from "./previousGame";
import { Goalies } from "./goalies";
import { PreviewStandings } from "./previewStandings";
import { TeamStatsVs } from "./teamStatsVs";
import { PlayersToWatch } from "./playersToWatch";
import { LastTenGames } from "./lastTenGames";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";

export const Preview = () => {
  const [preview, setPreview] = useContext(PreviewContext);
  const [teams, setTeams] = useState([])
  const { gameCenter, setGameCenter, content, setContent } =
    useContext(GameCenterContext);

  const { game, away, home } = useParams();
  const getPreviewStats = (away, home) => {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/?leaders&leaderCategories=points&leaderCategories=goals&leaderCategories=assists&leaderCategories=plusMinus&leaderCategories=gaa&leaderCategories=wins&leaderCategories=shutouts&leaderCategories=savePct&teamId=${away},${home}&expand=team.roster&expand=team.stats&expand=team.record&expand=team.schedule.next`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) => setTeams(response.teams))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const getGameInfo = (gamePk) => {
      fetch(`https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => setGameCenter({ gameCenter: response }))

        .catch((err) => console.error(err));
    };

    const getContent = (gamePk) => {
      fetch(`http://statsapi.web.nhl.com/api/v1/game/${gamePk}/content`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => setContent({ content: response }))
        .catch((err) => console.error(err));
    };


      getGameInfo(gameCenter.gameCenter.gamePk);
      getContent(gameCenter.gameCenter.gamePk);
      getPreviewStats(away, home);
    
  }, []);
  if (preview[0] === undefined) {
    return <></>;
  } else {
    return (
      <div id="preview-container">
        <section className="preview-col" id="preview-left-col">
          <div id="last-ten-section">
            <LastTenGames team={preview[0]} />
            <LastTenGames team={preview[1]} />
          </div>
          <TeamStatsVs />
          <PreviewStandings />
        </section>
        <section className="preview-col" id="preview-mid-col">
          <PlayersToWatch />

          <Goalies teams={teams} />

          <ScheduleRoster teams={teams} />
        </section>

        <section className="preview-col" id="preview-right-col">
          <PreviousGame teams={teams} />
          <SeasonSeries teams={teams} />
        </section>
      </div>
    );
  }
};