import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../dispatch/dispatch";
import { PlayerStats } from "./playerSplits";
import { Gamelog } from "./gamelogs";
import { Career } from "./career";
import { LastFive } from "./lastFiveGames";

export const GoalieMainStats = () => {
  const [player, setPlayer, stats, setStats] = useContext(PlayerContext);
  const [tab, setTab] = useState("stats");

  return (
    <div id="container">
      <div id="profile-card">
        <img
          src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.id}.jpg`}
          alt="profile pic"
          id="profile-pic"
        />
        <h1>
          {player.fullName} | #{player.primaryNumber}
        </h1>
        <div id="profile-card-info">
          <p className="bio-card-details">
            {player.primaryPosition.abbreviation} | {player.height} |{" "}
            {player.weight} lb | Age: {player.currentAge}
          </p>
        </div>
        <div id="profile-mid-div">
          <div id="mid-details">
            <p className="bio-details">
              Birthplace {player.birthCity}, {player.birthCountry}
            </p>
            <p className="bio-details">Born {player.birthDate}</p>
            <p>Catches: {player.shootsCatches}</p>
            <a
              //   className="bio-details"
              className="link-style"
              id="news-link"
              href={`https://www.nhl.com/devils/search#q=${player.fullName}&type=video`}
            >{`Watch ${player.fullName} Highlights`}</a>
          </div>

          <div id="season-stats">
            <table id="season-table">
              <thead>
                <tr>
                  <th className="sticky-col first-col">Season</th>
                  <th>GP</th>
                  <th>GS</th>
                  <th>W</th>
                  <th>L</th>
                  <th>OT</th>
                  <th>SA</th>
                  <th>GA</th>
                  <th>GAA</th>
                  <th>SV%</th>
                  <th>SO</th>
                  <th>MIN</th>
                </tr>
              </thead>
              <tbody>
                {stats[1].map((season) => {
                  return (
                    <tr key={season.games}>
                      <td className="sticky-col first-col">2022 - 2023</td>
                      <td>{season.games}</td>
                      <td>{season.gamesStarted}</td>
                      <td>{season.wins}</td>
                      <td>{season.losses}</td>
                      <td>{season.ot}</td>
                      <td>{season.goalsAgainst}</td>
                      <td>{season.shotsAgainst}</td>
                      <td>
                        {Math.round(season.goalAgainstAverage * 100) / 100}
                      </td>
                      <td>{season.savePercentage.toFixed(3)}</td>
                      <td>{season.shutouts}</td>
                      <td>{season.timeOnIce}</td>
                    </tr>
                  );
                })}
                {stats[2].map((season) => {
                  return (
                    <tr key={season.games}>
                      <td className="sticky-col first-col">Career</td>
                      <td>{season.games}</td>
                      <td>{season.gamesStarted}</td>
                      <td>{season.wins}</td>
                      <td>{season.losses}</td>
                      <td>{season.ot}</td>
                      <td>{season.goalsAgainst}</td>
                      <td>{season.shotsAgainst}</td>
                      <td>
                        {Math.round(season.goalAgainstAverage * 100) / 100}
                      </td>
                      <td>{season.savePercentage.toFixed(3)}</td>
                      <td>{season.shutouts}</td>
                      <td>{season.timeOnIce}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <LastFive props={"goalie"} />

      <section id="player-stats">
        <button
          onClick={() => {
            setTab("stats");
          }}
        >
          Splits
        </button>
        <button
          onClick={() => {
            setTab("game-log");
          }}
        >
          Gamelog
        </button>
        <button
          onClick={() => {
            setTab("career");
          }}
        >
          Career
        </button>

        <section id="player-stats-container">
          {tab === "stats" ? (
            <PlayerStats props={"goalie"} />
          ) : tab === "game-log" ? (
            <Gamelog props={"goalie"} />
          ) : tab === "career" ? (
            <Career props={"goalie"} />
          ) : null}
        </section>
      </section>
    </div>
  );
};
