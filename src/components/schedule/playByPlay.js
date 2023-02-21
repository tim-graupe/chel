import React, { useContext, useState } from "react";
import { GameCenterContext, PlayerContext } from "../../dispatch/dispatch";
import { Canvas } from "./live game/canvas";
import { Link } from "react-router-dom";
export const PlayByPlay = () => {
  const game = useContext(GameCenterContext);
  const [player, setPlayer, stats, setStats] = useContext(PlayerContext);
  const [currentPeriod, setCurrentPeriod] = useState(1);
  const [playerID, setPlayerID] = useState(null);

  function getPlayer(player) {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${player}/stats?stats=yearByYear&stats=statsSingleSeason&season=20222023&stats=careerRegularSeason`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((response) =>
        setStats([
          response.stats[0].splits.filter(
            (league) => league.league.name === "National Hockey League"
          ),
          [response.stats[1].splits[0].stat],
          [response.stats[2].splits[0].stat],
        ])
      )
      .then(setPlayerID(player))

      .catch((err) => console.error(err));

    fetch(`https://statsapi.web.nhl.com/api/v1/people/${player}`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setPlayer(response.people[0]))
      .catch((err) => console.error(err));
  }

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
          )
          .reverse()
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
                        <div className="pbp-details" key={player.player.id}>
                          <img
                            src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.player.id}.jpg`}
                            alt="profile pic"
                            className="pbp-pic"
                          />
                          <p>
                            {" "}
                            <Link
                              className="link-style"
                              to={`/players/${player.player.id}`}
                              onClick={() => {
                                getPlayer(player.player.id);
                              }}
                            >
                              {player.player.fullName}
                            </Link>
                          </p>
                        </div>
                      );
                    })}
                  </section>
                  <div id="pbp-rink">
                    {" "}
                    <Canvas props={[play.coordinates.x, play.coordinates.y]} />
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
