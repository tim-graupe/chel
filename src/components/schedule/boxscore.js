import React from "react";


export const Boxscore = (props) => {
if (props.game === null) {
    return <p>Click</p>
} else {
return (
    <>
            {/* <div id="stars">
        <h1>Stars of the Game</h1>
        <h4>First</h4>
        <p>{props.game.liveData.decisions.firstStar.fullName}</p>

        <h4>Second</h4>
        <p>{props.game.liveData.decisions.secondStar.fullName}</p>

        <h4>Third</h4>
        <p>{props.game.liveData.decisions.thirdStar.fullName}</p>

        </div> */}
    <div id="team-stat-boxes">
    <div className="team-stat-box" id="away-stat-box">
    <h1>{props.game.gameData.teams.away.name}</h1>
      <div className="stat-box"><p>Goals: {props.game.liveData.boxscore.teams.away.teamStats.teamSkaterStats.goals}</p></div>
    <div className="stat-box"><p>Shots: {props.game.liveData.boxscore.teams.away.teamStats.teamSkaterStats.shots}</p></div>
    <div className="stat-box"><p>Hits: {props.game.liveData.boxscore.teams.away.teamStats.teamSkaterStats.hits}</p></div>

    <div className="stat-box"><p>PIM: {props.game.liveData.boxscore.teams.away.teamStats.teamSkaterStats.pim}</p></div>

    <div className="stat-box"><p>Faceoff Win %: {props.game.liveData.boxscore.teams.away.teamStats.teamSkaterStats.faceOffWinPercentage}</p></div>
    <h4>Power Play</h4>
    <table className="stat-box" id="pp-box">
        <thead><td>Goals</td><td>Opportunities</td><td>Percentage</td></thead>
        <tbody>
            <tr>
                <td>{props.game.liveData.boxscore.teams.away.teamStats.teamSkaterStats.powerPlayGoals}</td>
                <td>{props.game.liveData.boxscore.teams.away.teamStats.teamSkaterStats.powerPlayOpportunities}</td>
                <td>{props.game.liveData.boxscore.teams.away.teamStats.teamSkaterStats.powerPlayPercentage}</td>
            </tr>
        </tbody>
        
 


    
    
    </table>

    

    </div>
    <div className="team-stat-box" id="home-stat-box">
    <h1>{props.game.gameData.teams.home.name}</h1>


    <div className="stat-box"><p>Goals: {props.game.liveData.boxscore.teams.home.teamStats.teamSkaterStats.goals}</p></div>
    <div className="stat-box"><p>Shots: {props.game.liveData.boxscore.teams.home.teamStats.teamSkaterStats.shots}</p></div>
    <div className="stat-box"><p>Hits: {props.game.liveData.boxscore.teams.home.teamStats.teamSkaterStats.hits}</p></div>

    <div className="stat-box"><p>PIM: {props.game.liveData.boxscore.teams.home.teamStats.teamSkaterStats.pim}</p></div>

    <div className="stat-box"><p>Faceoff Win %: {props.game.liveData.boxscore.teams.home.teamStats.teamSkaterStats.faceOffWinPercentage}</p></div>
         <h4>Power Play</h4>
    <table className="stat-box" id="pp-box">
       
        <thead><td>Goals</td><td>Opportunities</td><td>Percentage</td></thead>
        <tbody>
            <tr>
                <td>{props.game.liveData.boxscore.teams.home.teamStats.teamSkaterStats.powerPlayGoals}</td>
                <td>{props.game.liveData.boxscore.teams.home.teamStats.teamSkaterStats.powerPlayOpportunities}</td>
                <td>{props.game.liveData.boxscore.teams.home.teamStats.teamSkaterStats.powerPlayPercentage}</td>
            </tr>
        </tbody>
        
 


    
    
    </table>

    

    </div>
    </div>
    </>
)
}}