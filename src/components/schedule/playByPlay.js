import React, { useContext, useState } from "react";
import { GameCenterContext } from "../../dispatch/dispatch";

export const PlayByPlay = () => {
  const game = useContext(GameCenterContext)
  // let plays = props.props;
  const [currentPeriod, setCurrentPeriod] = useState(1)
  if (game.gameCenter.gameCenter === null || game === undefined) {
    return <></>;
  } else {
    return (
      <ul className="pbp-events">
        {game.gameCenter.gameCenter.liveData.linescore.periods.map((period) => {
            return (
                <button key={period.num}onClick={()=> {
                    setCurrentPeriod(period.num)
                }}>{period.num}</button>
            )
        })}
        {game.gameCenter.gameCenter.liveData.plays.allPlays
          .filter(
            (play) =>
              play.about.period === currentPeriod &&
              play.result.event !== "Stoppage" &&
              play.result.event !== "Period End" &&
              play.result.event !== "Official Challenge" &&
              play.result.event !== "Game Scheduled" &&
              play.result.event !== "Period Ready" &&
              play.result.event !== "Period Start" &&
              play.result.event !== "Period Official" &&
              play.result.event !== "Game Official" &&
              play.result.event !== "Game End"
          )
          //Shot, Blocked Shot, Hit,  Faceoff, Missed Shot, Goal, Takeaway, Giveaway, Penalty
          .map((play) => {
            return (
              <li key={play.about.eventIdx} className="pbp-event-box">
                <p className="pbp-type">
                  {play.about.periodTimeRemaining} {play.result.event}
                </p>
                <p>{play.result.description}</p>
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
              </li>
            );
          })}

{game.gameCenter.gameCenter.liveData.plays.allPlays
          .filter(
            (play) =>
              play.about.period === currentPeriod &&
              play.result.event === "Period End" &&
              play.result.event === "Game Official" &&
              play.result.event === "Game End"
          )
          .map((play) => {
            return (
              <li key={play.about.eventIdx} className="pbp-event-box">
                <p className="pbp-type">
                  {play.about.periodTimeRemaining} {play.result.event}
                </p>
                <p>{play.result.description}</p>

              </li>
            );
          })}
      </ul>
    );
  }
};
