import React, { useContext } from "react";
import "../../style sheets/stats.css";
import { RosterContext } from "../../dispatch/dispatch";
export const TeamStats = (props) => {
const [roster, setRoster] = useContext(RosterContext)

  
  if (props.team === null) {
    return <></>
  } else {
    return (
      <>
        <div id="main-info">
        <h1>{props.team[0].splits[0].team.name}</h1>
        <p>
          {props.team[0].splits[0].stat.wins}-
          {props.team[0].splits[0].stat.losses}-
          {props.team[0].splits[0].stat.ot}
        </p>
        </div>
        <table id="team-stats-table">
            <caption>Summary</caption>
            <thead>
                <tr>
            <th>Faceoff Win %</th><th>Faceoffs Lost</th><th>Faceoffs Taken</th><th>Faceoffs Won</th><th>Goals Against Per Game</th><th>Goals per Game</th><th>Penalty Kill %</th><th>PPG</th><th>PPO</th><th>PP%</th><th>SV%</th><th>S%</th><th>Shots Allowed</th><th>Shots Per Game</th>
                </tr>
            </thead>
            <tbody>
             <td>{props.team[1].splits[0].stat.faceOffWinPercentage} - {props.team[0].splits[0].stat.faceOffWinPercentage}%</td>
             <td>{props.team[1].splits[0].stat.faceOffsLost} - {props.team[0].splits[0].stat.faceOffsLost}</td> 
             <td>{props.team[1].splits[0].stat.faceOffsTaken} - {props.team[0].splits[0].stat.faceOffsTaken}</td> 
             <td>{props.team[1].splits[0].stat.faceOffsWon} - {props.team[0].splits[0].stat.faceOffsWon}</td> 
             <td>{props.team[1].splits[0].stat.goalsAgainstPerGame} - {props.team[0].splits[0].stat.goalsAgainstPerGame}</td>
             <td>{props.team[1].splits[0].stat.goalsPerGame} - {props.team[0].splits[0].stat.goalsPerGame}</td>
             <td>{props.team[1].splits[0].stat.penaltyKillPercentage} - {props.team[0].splits[0].stat.penaltyKillPercentage}</td>
             <td>{props.team[1].splits[0].stat.powerPlayGoals} - {props.team[0].splits[0].stat.powerPlayGoals}</td>
             <td>{props.team[1].splits[0].stat.powerPlayOpportunities} - {props.team[0].splits[0].stat.powerPlayOpportunities}</td>
             <td>{props.team[1].splits[0].stat.powerPlayPercentage} - {props.team[0].splits[0].stat.powerPlayPercentage}%</td>
             <td>{props.team[1].splits[0].stat.savePctRank} - {props.team[0].splits[0].stat.savePctg}%</td>
             <td>{props.team[1].splits[0].stat.shootingPctRank} - {props.team[0].splits[0].stat.shootingPctg}%</td>
             <td>{props.team[1].splits[0].stat.shotsAllowed} - {Math.round(props.team[0].splits[0].stat.shotsAllowed * 10) / 10}%</td>
             <td>{props.team[1].splits[0].stat.shotsPerGame} - {Math.round(props.team[0].splits[0].stat.shotsPerGame * 10) / 10}%</td>

            </tbody>
        </table>
      </>
    );
  }
};
