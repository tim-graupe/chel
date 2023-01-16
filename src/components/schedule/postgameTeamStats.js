import React, {useContext, useState} from "react";
import { GameCenterContext } from "../../dispatch/dispatch";

export const TeamStats = () => {
  const stats = useContext(GameCenterContext)

  
  if (stats.gameCenter.gameCenter === undefined || stats.gameCenter.gameCenter === null || stats === undefined) {
    return <></>;
  } else {
    let away = Object.keys(stats.gameCenter.gameCenter.liveData.boxscore.teams.away.players).map(
      (key) => (
        Number(key), stats.gameCenter.gameCenter.liveData.boxscore.teams.away.players[key]
      )
    );

    let home = Object.keys(stats.gameCenter.gameCenter.liveData.boxscore.teams.home.players).map(
      (key) => (
        Number(key), stats.gameCenter.gameCenter.liveData.boxscore.teams.home.players[key]
      )
    );

    return (
      <div id="gamecenter-team-stats-container">
        <table className="post-game-skater-stats">
        <thead>
        <tr>
            <th></th>
            <th>SOG</th>
            <th>FO%</th>
            <th>PP</th>
            <th>PIM</th>
            <th>HITS</th>
            <th>BLKS</th>
            <th>GVA</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>
              {" "}
              <img
                src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${stats.gameCenter.gameCenter.gameData.teams.away.id}.svg`}
                className="schedule-logos"
                alt="team-pic"
              />
              {stats.gameCenter.gameCenter.gameData.teams.away.teamName}
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.away.teamStats
                  .teamSkaterStats.shots
              }
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.away.teamStats
                  .teamSkaterStats.faceOffWinPercentage
              }{" "}
              %
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.away.teamStats
                  .teamSkaterStats.powerPlayGoals
              }{" "}
              /{" "}
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.away.teamStats
                  .teamSkaterStats.powerPlayOpportunities
              }
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.away.teamStats
                  .teamSkaterStats.pim
              }
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.away.teamStats
                  .teamSkaterStats.hits
              }
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.away.teamStats
                  .teamSkaterStats.blocked
              }
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.away.teamStats
                  .teamSkaterStats.giveaways
              }
            </td>
          </tr>

          <tr>
            <td>
              {" "}
              <img
                src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${stats.gameCenter.gameCenter.gameData.teams.home.id}.svg`}
                className="schedule-logos"
                alt="team-pic"
              />
              {stats.gameCenter.gameCenter.gameData.teams.home.teamName}
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.home.teamStats
                  .teamSkaterStats.shots
              }
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.home.teamStats
                  .teamSkaterStats.faceOffWinPercentage
              }{" "}
              %
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.home.teamStats
                  .teamSkaterStats.powerPlayGoals
              }{" "}
              /{" "}
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.home.teamStats
                  .teamSkaterStats.powerPlayOpportunities
              }
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.home.teamStats
                  .teamSkaterStats.pim
              }
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.home.teamStats
                  .teamSkaterStats.hits
              }
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.home.teamStats
                  .teamSkaterStats.blocked
              }
            </td>
            <td>
              {
                stats.gameCenter.gameCenter.liveData.boxscore.teams.home.teamStats
                  .teamSkaterStats.giveaways
              }
            </td>
          </tr>
        </tbody>
        </table>

        <table
          id="post-game-skater-stats-away"
          className="post-game-skater-stats"
        >
          <caption>{stats.gameCenter.gameCenter.gameData.teams.away.teamName}</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Forwards</th>
              <th>G</th>
              <th>A</th>
              <th>P</th>
              <th>+/=</th>
              <th>PIM</th>
              <th>SOG</th>
              <th>HITS</th>
              <th>BLKS</th>
              <th>GVA</th>
              <th>TKA</th>
              <th>FO Won</th>
              <th>TOI</th>
              <th>PP TOI</th>
              <th>SH TOI</th>
            </tr>
          </thead>
          <tbody>
            {away
              .filter((player) => player.position.type === "Forward")
              .map((player) => {
                return (
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>
                    <td>{player.person.fullName}</td>
                    <td>{player.stats.skaterStats.goals}</td>
                    <td>{player.stats.skaterStats.assists}</td>
                    <td>
                      {player.stats.skaterStats.goals +
                        player.stats.skaterStats.assists}
                    </td>
                    <td>{player.stats.skaterStats.plusMinus}</td>
                    <td>{player.stats.skaterStats.penaltyMinutes}</td>
                    <td>{player.stats.skaterStats.shots}</td>
                    <td>{player.stats.skaterStats.hits}</td>
                    <td>{player.stats.skaterStats.blocked}</td>
                    <td>{player.stats.skaterStats.giveaways}</td>
                    <td>{player.stats.skaterStats.takeaways}</td>
                    <td>{player.stats.skaterStats.faceoffTaken}</td>
                    <td>{player.stats.skaterStats.timeOnIce}</td>
                    <td>{player.stats.skaterStats.powerPlayTimeOnIce}</td>
                    <td>{player.stats.skaterStats.shortHandedTimeOnIce}</td>
                  </tr>
                );
              })}

            <tr>
              <td>#</td>
              <td>Defenseman</td>
              <td>G</td>
              <td>A</td>
              <td>P</td>
              <td>+/=</td>
              <td>PIM</td>
              <td>SOG</td>
              <td>HITS</td>
              <td>BLKS</td>
              <td>GVA</td>
              <td>TKA</td>
              <td>FO Won</td>
              <td>TOI</td>
              <td>PP TOI</td>
              <td>SH TOI</td>
            </tr>

            {away
              .filter((player) => player.position.type === "Defenseman")
              .map((player) => {
                return (
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>
                    <td>{player.person.fullName}</td>
                    <td>{player.stats.skaterStats.goals}</td>
                    <td>{player.stats.skaterStats.assists}</td>
                    <td>
                      {player.stats.skaterStats.goals +
                        player.stats.skaterStats.assists}
                    </td>
                    <td>{player.stats.skaterStats.plusMinus}</td>
                    <td>{player.stats.skaterStats.penaltyMinutes}</td>
                    <td>{player.stats.skaterStats.shots}</td>
                    <td>{player.stats.skaterStats.hits}</td>
                    <td>{player.stats.skaterStats.blocked}</td>
                    <td>{player.stats.skaterStats.giveaways}</td>
                    <td>{player.stats.skaterStats.takeaways}</td>
                    <td>{player.stats.skaterStats.faceoffTaken}</td>
                    <td>{player.stats.skaterStats.timeOnIce}</td>
                    <td>{player.stats.skaterStats.powerPlayTimeOnIce}</td>
                    <td>{player.stats.skaterStats.shortHandedTimeOnIce}</td>
                  </tr>
                );
              })}

            <tr>
              <td>#</td>
              <td>Goalie</td>
              <td>EV</td>
              <td>PP</td>
              <td>SH</td>
              <td>SAVES - SHOTS</td>
              <td>SV%</td>
              <td>PIM</td>
              <td>TOI</td>
            </tr>
            {away
              .filter((player) => player.position.type === "Goalie")
              .map((player) => {
                return (
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>
                    <td>{player.person.fullName}</td>
                    <td>
                      {player.stats.goalieStats.evenSaves} -{" "}
                      {player.stats.goalieStats.evenShotsAgainst}
                    </td>
                    <td>
                      {player.stats.goalieStats.powerPlaySaves} -{" "}
                      {player.stats.goalieStats.powerPlayShotsAgainst}
                    </td>
                    <td>
                      {player.stats.goalieStats.shortHandedSaves} -{" "}
                      {player.stats.goalieStats.shortHandedShotsAgainst}
                    </td>
                    <td>
                      {player.stats.goalieStats.saves} -{" "}
                      {player.stats.goalieStats.shots}
                    </td>
                    <td>
                      {Math.floor(player.stats.goalieStats.savePercentage) /
                        100}{" "}
                      %
                    </td>
                    <td>{player.stats.goalieStats.pim}</td>
                    <td>{player.stats.goalieStats.timeOnIce}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <table
          id="post-game-skater-stats-home"
          className="post-game-skater-stats"
        >
          <caption>{stats.gameCenter.gameCenter.gameData.teams.home.teamName}</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Forwards</th>
              <th>G</th>
              <th>A</th>
              <th>P</th>
              <th>+/=</th>
              <th>PIM</th>
              <th>SOG</th>
              <th>HITS</th>
              <th>BLKS</th>
              <th>GVA</th>
              <th>TKA</th>
              <th>FO Won</th>
              <th>TOI</th>
              <th>PP TOI</th>
              <th>SH TOI</th>
            </tr>
          </thead>
          <tbody>
            {home
              .filter((player) => player.position.type === "Forward")
              .map((player) => {
                return (
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>
                    <td>{player.person.fullName}</td>
                    <td>{player.stats.skaterStats.goals}</td>
                    <td>{player.stats.skaterStats.assists}</td>
                    <td>
                      {player.stats.skaterStats.goals +
                        player.stats.skaterStats.assists}
                    </td>
                    <td>{player.stats.skaterStats.plusMinus}</td>
                    <td>{player.stats.skaterStats.penaltyMinutes}</td>
                    <td>{player.stats.skaterStats.shots}</td>
                    <td>{player.stats.skaterStats.hits}</td>
                    <td>{player.stats.skaterStats.blocked}</td>
                    <td>{player.stats.skaterStats.giveaways}</td>
                    <td>{player.stats.skaterStats.takeaways}</td>
                    <td>{player.stats.skaterStats.faceoffTaken}</td>
                    <td>{player.stats.skaterStats.timeOnIce}</td>
                    <td>{player.stats.skaterStats.powerPlayTimeOnIce}</td>
                    <td>{player.stats.skaterStats.shortHandedTimeOnIce}</td>
                  </tr>
                );
              })}

            <tr>
              <td>#</td>
              <td>Defenseman</td>
              <td>G</td>
              <td>A</td>
              <td>P</td>
              <td>+/=</td>
              <td>PIM</td>
              <td>SOG</td>
              <td>HITS</td>
              <td>BLKS</td>
              <td>GVA</td>
              <td>TKA</td>
              <td>FO Won</td>
              <td>TOI</td>
              <td>PP TOI</td>
              <td>SH TOI</td>
            </tr>

            {home
              .filter((player) => player.position.type === "Defenseman")
              .map((player) => {
                return (
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>
                    <td>{player.person.fullName}</td>
                    <td>{player.stats.skaterStats.goals}</td>
                    <td>{player.stats.skaterStats.assists}</td>
                    <td>
                      {player.stats.skaterStats.goals +
                        player.stats.skaterStats.assists}
                    </td>
                    <td>{player.stats.skaterStats.plusMinus}</td>
                    <td>{player.stats.skaterStats.penaltyMinutes}</td>
                    <td>{player.stats.skaterStats.shots}</td>
                    <td>{player.stats.skaterStats.hits}</td>
                    <td>{player.stats.skaterStats.blocked}</td>
                    <td>{player.stats.skaterStats.giveaways}</td>
                    <td>{player.stats.skaterStats.takeaways}</td>
                    <td>{player.stats.skaterStats.faceoffTaken}</td>
                    <td>{player.stats.skaterStats.timeOnIce}</td>
                    <td>{player.stats.skaterStats.powerPlayTimeOnIce}</td>
                    <td>{player.stats.skaterStats.shortHandedTimeOnIce}</td>
                  </tr>
                );
              })}

            <tr>
              <td>#</td>
              <td>Goalie</td>
              <td>EV</td>
              <td>PP</td>
              <td>SH</td>
              <td>SAVES - SHOTS</td>
              <td>SV%</td>
              <td>PIM</td>
              <td>TOI</td>
            </tr>
            {home
              .filter((player) => player.position.type === "Goalie")
              .map((player) => {
                return (
                  <tr key={player.person.id}>
                    <td>{player.jerseyNumber}</td>
                    <td>{player.person.fullName}</td>
                    <td>
                      {player.stats.goalieStats.evenSaves} -{" "}
                      {player.stats.goalieStats.evenShotsAgainst}
                    </td>
                    <td>
                      {player.stats.goalieStats.powerPlaySaves} -{" "}
                      {player.stats.goalieStats.powerPlayShotsAgainst}
                    </td>
                    <td>
                      {player.stats.goalieStats.shortHandedSaves} -{" "}
                      {player.stats.goalieStats.shortHandedShotsAgainst}
                    </td>
                    <td>
                      {player.stats.goalieStats.saves} -{" "}
                      {player.stats.goalieStats.shots}
                    </td>
                    <td>
                      {Math.floor(player.stats.goalieStats.savePercentage) /
                        100}{" "}
                      %
                    </td>
                    <td>{player.stats.goalieStats.pim}</td>
                    <td>{player.stats.goalieStats.timeOnIce}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <section id="officials-section">
          <h1>Additional Game Information</h1>
          <h3>Officials</h3>
          <div>
            {" "}
            Referees{" "}
            {stats.gameCenter.gameCenter.liveData.boxscore.officials
              .filter((offical) => offical.officialType === "Referee")
              .map((official) => {
                return <p key={official.official.id}>{official.official.fullName}</p>;
              })}
          </div>
          <div>
            {" "}
            Linesman{" "}
            {stats.gameCenter.gameCenter.liveData.boxscore.officials
              .filter((offical) => offical.officialType === "Linesman")
              .map((official) => {
                return <p key={official.official.id}>{official.official.fullName}</p>;
              })}
          </div>
          <h3>Head Coaches</h3>
          <p>
            {stats.gameCenter.gameCenter.liveData.boxscore.teams.away.team.name}{" "}
            {stats.gameCenter.gameCenter.liveData.boxscore.teams.away.coaches[0].person.fullName}
          </p>
          <p>
            {stats.gameCenter.gameCenter.liveData.boxscore.teams.home.team.name}{" "}
            {stats.gameCenter.gameCenter.liveData.boxscore.teams.home.coaches[0].person.fullName}
          </p>
        </section>
      </div>
    );
  }
};
