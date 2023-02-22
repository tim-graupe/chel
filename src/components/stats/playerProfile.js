import React, {useContext, useEffect, useState} from "react";
import { PlayerContext } from "../../dispatch/dispatch";
import { PlayerStats } from "./playerSplits";
import { Gamelog } from "./gamelogs";
import { Career } from "./career";
import { useParams } from "react-router-dom";
import { GoalieMainStats } from "./goalieMainStats";
import { LastFive } from "./lastFiveGames";
export const PlayerProfile = () => {
const [player, setPlayer, stats, setStats] = useContext(PlayerContext)
const [tab, setTab] = useState("stats")
const [year, setYear] = useState(20222023)
const id = useParams()
useEffect(() => {
  function getPlayer(player) {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${player}/stats?stats=yearByYear&stats=statsSingleSeason&season=${year}&stats=careerRegularSeason`,
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
      .catch((err) => console.error(err));

    fetch(`https://statsapi.web.nhl.com/api/v1/people/${player}`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setPlayer(response.people[0]))
      .catch((err) => console.error(err));
  }
  getPlayer(id.id)
}, [year])

  if (player === null || player === undefined | player.primaryPosition === undefined || stats === undefined) {
    return <></>
  } else if (player.primaryPosition.name !== "Goalie") {
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
              {player.primaryPosition.abbreviation} |{" "}
              {player.height} | {player.weight} lb | Age:{" "}
              {player.currentAge}
            </p>
          </div>
          <div id="profile-mid-div">
              <div id="mid-details">
              <p className="bio-details">
              Birthplace {player.birthCity},{" "}
              {player.birthCountry}
            </p>
            <p className="bio-details">Born {player.birthDate}</p>
            <p>Shoots: {player.shootsCatches}</p>
            <a
              className="bio-details" id="news-link"
              href={`https://www.nhl.com/devils/search#q=${player.fullName}&type=video`}
            >{`Watch ${player.fullName} Highlights`}</a>
              </div>
         
          <div id="season-stats">
            <table id="season-table">
              <thead>
                <tr>
                  <th className="sticky-col first-col">Season</th>
                  <th>Games</th>
                  <th>Goals</th>
                  <th>Assists</th>
                  <th>Points</th>
                  <th>+/-</th>
                  <th>PIM</th>
                  <th>PPG</th>
                  <th>PPP</th>
                  <th>SHG</th>
                  <th>SHP</th>
                  <th>GWG</th>
                  <th>OTG</th>
                  <th>S</th>
                  <th>S%</th>
                </tr>
              </thead>
              <tbody>
              {stats[1].map((season) => {
                  return (
                    <tr key={season.games}>
                      <td className="sticky-col first-col">2022 - 2023</td>
                      <td>{season.games}</td>
                      <td>{season.goals}</td>
                      <td>{season.assists}</td>
                      <td>{season.points}</td>
                      <td>{season.plusMinus}</td>
                      <td>{season.pim}</td>
                      <td>{season.powerPlayGoals}</td>
                      <td>{season.powerPlayPoints}</td>
                      <td>{season.shortHandedGoals}</td>
                      <td>{season.shortHandedPoints}</td>
                      <td>{season.gameWinningGoals}</td>
                      <td>{season.overTimeGoals}</td>
                      <td>{season.shots}</td>
                      <td>{season.shotPct}</td>
                    </tr>
                  );
                })}                
                {stats[2].map((season) => {
                  return (
                    <tr key={season.games}>
                      <td className="sticky-col first-col">Career</td>
                      <td>{season.games}</td>
                      <td>{season.goals}</td>
                      <td>{season.assists}</td>
                      <td>{season.points}</td>
                      <td>{season.plusMinus}</td>
                      <td>{season.pim}</td>
                      <td>{season.powerPlayGoals}</td>
                      <td>{season.powerPlayPoints}</td>
                      <td>{season.shortHandedGoals}</td>
                      <td>{season.shortHandedPoints}</td>
                      <td>{season.gameWinningGoals}</td>
                      <td>{season.overTimeGoals}</td>
                      <td>{season.shots}</td>
                      <td>{season.shotPct}</td>
                    </tr>
                  );
                })} 
              </tbody>
            </table>
            </div>
          </div>
          <LastFive />
        </div>
        

                <section id="player-stats">
                <button onClick={() => {
                  setTab('stats')
                }}>Stats</button>
                <button onClick={() => {
                  setTab('game-log')
                }}>Gamelog</button>
                <button onClick={() => {
                  setTab('career')
                }}>Career</button>
                
                <section id="player-stats-container">
                {tab === 'stats' ? <PlayerStats/> : 
        tab === 'game-log' ?
        <Gamelog/> :
        tab === 'career' ?
        <Career /> :
          null
      }
                </section>
                </section>
      </div>
    );
  } else {
    return <GoalieMainStats player={player} />
  }
};
