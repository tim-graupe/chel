import React from "react";

export const PlayerProfile = (props) => {

  if (props.playerBio === null) {
    return <></>;
  } else {
    return (
      <div id="container">
        <div id="profile-card">
          <img
            src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${props.playerID}.jpg`}
            alt="profile pic"
            id="profile-pic"
          />
          <h1>
            {props.playerBio.fullName} | #{props.playerBio.primaryNumber}
          </h1>
          <div id="profile-card-info">
            <p className="bio-card-details">
              {props.playerBio.primaryPosition.abbreviation} |{" "}
              {props.playerBio.height} | {props.playerBio.weight} lb | Age:{" "}
              {props.playerBio.currentAge}
            </p>
          </div>
          <div id="bio-div">
            <p className="bio-details">
              Birthplace {props.playerBio.birthCity},{" "}
              {props.playerBio.birthCountry}
            </p>
            <p className="bio-details">Born {props.playerBio.birthDate}</p>

            <a
              className="bio-details" id="news-link"
              href={`https://www.nhl.com/devils/search#q=${props.playerBio.fullName}&type=video`}
            >{`Watch ${props.playerBio.fullName} Highlights`}</a>
          </div>
          <div id="season-stats">
            <table>
              <thead>
                <tr>
                  <td>Season</td>
                  <td>Games</td>
                  <td>Goals</td>
                  <td>Assists</td>
                  <td>Points</td>
                  <td>+/-</td>
                  <td>PIM</td>
                  <td>PPG</td>
                  <td>PPP</td>
                  <td>SHG</td>
                  <td>SHP</td>
                  <td>GWG</td>
                  <td>OTG</td>
                  <td>S</td>
                  <td>S%</td>
                </tr>
              </thead>
              <tbody>
                {props.playerStats.reverse().map((season) => {
                  return (
                    <tr id={props.playerID}>
                      <td>{season.season}</td>
                      <td>{season.stat.games}</td>
                      <td>{season.stat.goals}</td>
                      <td>{season.stat.assists}</td>
                      <td>{season.stat.points}</td>
                      <td>{season.stat.plusMinus}</td>
                      <td>{season.stat.pim}</td>
                      <td>{season.stat.powerPlayGoals}</td>
                      <td>{season.stat.powerPlayPoints}</td>
                      <td>{season.stat.shortHandedGoals}</td>
                      <td>{season.stat.shortHandedPoints}</td>
                      <td>{season.stat.gameWinningGoals}</td>
                      <td>{season.stat.overTimeGoals}</td>
                      <td>{season.stat.shots}</td>
                      <td>{season.stat.shotPct}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};
