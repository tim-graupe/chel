import React, {useContext, useEffect, useState} from "react";
import { PlayerContext } from "../../dispatch/dispatch";
import { PlayerStats } from "./playerSplits";
import { Gamelog } from "./gamelogs";
import { Career } from "./career";
export const PlayerProfile = () => {
const player = useContext(PlayerContext)


  if (player === null || player === undefined | player[0].primaryPosition === undefined || player[2] === undefined) {
    return <></>
  } else {
    return (
      <div id="container">

        <div id="profile-card">
          <img
            src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player[0].id}.jpg`}
            alt="profile pic"
            id="profile-pic"
          />
          <h1>
            {player[0].fullName} | #{player[0].primaryNumber}
          </h1>
          <div id="profile-card-info">
            <p className="bio-card-details">
              {player[0].primaryPosition.abbreviation} |{" "}
              {player[0].height} | {player[0].weight} lb | Age:{" "}
              {player[0].currentAge}
            </p>
          </div>
          <div id="bio-div">
            <p className="bio-details">
              Birthplace {player[0].birthCity},{" "}
              {player[0].birthCountry}
            </p>
            <p className="bio-details">Born {player[0].birthDate}</p>

            <a
              className="bio-details" id="news-link"
              href={`https://www.nhl.com/devils/search#q=${player[0].fullName}&type=video`}
            >{`Watch ${player[0].fullName} Highlights`}</a>
          </div>
          <div id="season-stats">
            <table>
              <thead>
                <tr>
                  <th>Season</th>
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
              {player[2][1].map((season) => {
                  return (
                    <tr id={player.playerID}>
                      <td>2022 - 2023</td>
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
                {player[2][2].map((season) => {
                  return (
                    <tr id={player.playerID}>
                      <td>Career</td>
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

                <section id="player-stats">
                 <PlayerStats/> 
                 <Gamelog /> 
                 <Career /> 
                </section>
      </div>
    );
  }
};
