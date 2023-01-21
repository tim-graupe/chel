import React, { useContext } from "react";
import { ScheduleRoster } from "./scheduleRoster";
import { PreviewContext } from "../../dispatch/dispatch";
import { SeasonSeries } from "./seasonSeries";
import { PreviousGame } from "./previousGame";
import { Goalies } from "./goalies";
import { PreviewStandings } from "./previewStandings";
import { TeamStatsVs } from "./teamStatsVs";
import { PlayersToWatch } from "./playersToWatch";
import { LastTenGames } from "./lastTenGames";
export const Preview = () => {
  const [preview, setPreview] = useContext(PreviewContext);
  if (
    preview === null ||
    preview[0] === undefined ||
    preview[0].teamStats === undefined
  ) {
    return <></>;
  } else {
    return (
      <div id="preview-container">
        <section className="preview-col" id="preview-left-col">
          <LastTenGames teams={[preview[0], preview[1]]} />
          <TeamStatsVs />
          <PreviewStandings />
        </section>
        <section className="preview-col" id="preview-mid-col">
          <PlayersToWatch />
          <Goalies />
          <ScheduleRoster />
        </section>

        <section className="preview-col" id="preview-right-col">
          <PreviousGame />
          <SeasonSeries />
        </section>
      </div>
    );
  }
};
