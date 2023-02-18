import React, { useContext, useState } from "react";
import { GameCenterContext } from "../../dispatch/dispatch";
import { Canvas } from "./live game/canvas";

export const PlayByPlay = () => {
  const game = useContext(GameCenterContext);
  const [currentPeriod, setCurrentPeriod] = useState(1);



  if (game.gameCenter.gameCenter === undefined || game === undefined) {
    return <></>;
  } else {
    return (
      <ul className="pbp-events">
        {game.gameCenter.gameCenter.liveData.linescore.periods.map((period) => {
          if (period.num === 4) {
            return (
              <button
                key={period.num}
                onClick={() => {
                  setCurrentPeriod(period.num);
                }}
              >
                Overtime
              </button>
            );
          }
          return (
            <button
              key={period.num}
              onClick={() => {
                setCurrentPeriod(period.num);
              }}
            >
              {period.num}
            </button>
          );
        })}
        {game.gameCenter.gameCenter.liveData.plays.allPlays
          .filter(
            (play) =>
              play.result.event !== "Period Ready" &&
              play.about.period === currentPeriod
          ).reverse()
          //Shot, Blocked Shot, Hit,  Faceoff, Missed Shot, Goal, Takeaway, Giveaway, Penalty
          .map((play) => {
            if (play.players !== undefined) {
              return (
                <li key={play.about.eventIdx} className="pbp-event-box">
                  <p className="pbp-type">
                    {play.about.periodTimeRemaining} {play.result.event}
                  </p>
                  <section id="pbp-event-and-players">
                    <p className="pbp-description" id="box">
                      {play.result.description}
                    </p>

                    {play.players.map((player) => {
                      return (
                        <div className="pbp-details" key={player.id}>
                          <img
                            src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.player.id}.jpg`}
                            alt="profile pic"
                            className="pbp-pic"
                          />{" "}
                          <p>{player.player.fullName}</p>
                        </div>
                      );
                    })}
                  </section>
                  <div id="pbp-rink">
                    {" "}
                    <Canvas props={[play.coordinates.x,  play.coordinates.y]} />
                  </div>
                </li>
              );
            } else {
              return (
                <li
                  key={play.about.eventIdx}
                  className="pbp-event-box-no-players"
                >
                  <p className="pbp-type">
                    {play.about.periodTimeRemaining} {play.result.event}
                  </p>
                </li>
              );
            }
          })}
      </ul>
    );
  }
};
