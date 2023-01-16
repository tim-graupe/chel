import React, { useContext } from "react";
import { GameCenterContext } from "../../dispatch/dispatch";

export const LiveGameStats = () => {
    let game = useContext(GameCenterContext)
    return (
        <>
                    <table id="left-col-away-stats">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>G</th>
                  <th>A</th>
                  <th>+/-</th>
                  <th>S</th>
                  <th>PIM</th>
                  <th>TOI</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(
                  game.gameCenter.gameCenter.liveData.boxscore.teams.away
                    .players
                )
                  .filter((player) => player.position.type === "Forward")
                  .map((player) => {
                    return (
                      <tr key={player.person.id}>
                        <td>{player.jerseyNumber}</td>
                        <td>{player.person.fullName}</td>
                        <td>{player.stats.skaterStats.goals}</td>
                        <td>{player.stats.skaterStats.assists}</td>
                        <td>{player.stats.skaterStats.plusMinus}</td>
                        <td>{player.stats.skaterStats.shots}</td>
                        <td>{player.stats.skaterStats.penaltyMinutes}</td>
                        <td>{player.stats.skaterStats.timeOnIce}</td>
                      </tr>
                    );
                  })}
              </tbody>

              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>G</th>
                  <th>A</th>
                  <th>+/-</th>
                  <th>S</th>
                  <th>PIM</th>
                  <th>TOI</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(
                  game.gameCenter.gameCenter.liveData.boxscore.teams.away
                    .players
                )
                  .filter((player) => player.position.type === "Defenseman")
                  .map((player) => {
                    return (
                      <tr key={player.person.id}>
                        <td>{player.jerseyNumber}</td>
                        <td>{player.person.fullName}</td>
                        <td>{player.stats.skaterStats.goals}</td>
                        <td>{player.stats.skaterStats.assists}</td>
                        <td>{player.stats.skaterStats.plusMinus}</td>
                        <td>{player.stats.skaterStats.shots}</td>
                        <td>{player.stats.skaterStats.penaltyMinutes}</td>
                        <td>{player.stats.skaterStats.timeOnIce}</td>
                      </tr>
                    );
                  })}
              </tbody>

              <thead>
                <tr>
                  <th>#</th>
                  <th colSpan={3}>Goalies</th>
                  <th>SV</th>
                  <th>S</th>
                  <th>SV%</th>
                  <th>TOI</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(
                  game.gameCenter.gameCenter.liveData.boxscore.teams.away
                    .players
                )
                  .filter((player) => player.position.type === "Goalie")
                  .map((player) => {
                    return (
                      <tr key={player.person.id}>
                        <td>{player.jerseyNumber}</td>
                        <td colSpan="3">{player.person.fullName}</td>
                        <td>{player.stats.goalieStats.saves}</td>
                        <td>{player.stats.goalieStats.shots}</td>
                        <td>
                          {Math.round(
                            player.stats.goalieStats.savePercentage * 10
                          ) / 10}
                          %
                        </td>
                        <td>{player.stats.goalieStats.timeOnIce}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>

            <table id="left-col-home-stats">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>G</th>
                  <th>A</th>
                  <th>+/-</th>
                  <th>S</th>
                  <th>PIM</th>
                  <th>TOI</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(
                  game.gameCenter.gameCenter.liveData.boxscore.teams.home
                    .players
                )
                  .filter((player) => player.position.type === "Forward")
                  .map((player) => {
                    return (
                      <tr key={player.person.id}>
                        <td>{player.jerseyNumber}</td>
                        <td>{player.person.fullName}</td>
                        <td>{player.stats.skaterStats.goals}</td>
                        <td>{player.stats.skaterStats.assists}</td>
                        <td>{player.stats.skaterStats.plusMinus}</td>
                        <td>{player.stats.skaterStats.shots}</td>
                        <td>{player.stats.skaterStats.penaltyMinutes}</td>
                        <td>{player.stats.skaterStats.timeOnIce}</td>
                      </tr>
                    );
                  })}
              </tbody>

              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>G</th>
                  <th>A</th>
                  <th>+/-</th>
                  <th>S</th>
                  <th>PIM</th>
                  <th>TOI</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(
                  game.gameCenter.gameCenter.liveData.boxscore.teams.home
                    .players
                )
                  .filter((player) => player.position.type === "Defenseman")
                  .map((player) => {
                    return (
                      <tr key={player.person.id}>
                        <td>{player.jerseyNumber}</td>
                        <td>{player.person.fullName}</td>
                        <td>{player.stats.skaterStats.goals}</td>
                        <td>{player.stats.skaterStats.assists}</td>
                        <td>{player.stats.skaterStats.plusMinus}</td>
                        <td>{player.stats.skaterStats.shots}</td>
                        <td>{player.stats.skaterStats.penaltyMinutes}</td>
                        <td>{player.stats.skaterStats.timeOnIce}</td>
                      </tr>
                    );
                  })}
              </tbody>

              <thead>
                <tr>
                  <th>#</th>
                  <th colSpan={3}>Goalies</th>
                  <th>SV</th>
                  <th>S</th>
                  <th>SV%</th>
                  <th>TOI</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(
                  game.gameCenter.gameCenter.liveData.boxscore.teams.home
                    .players
                )
                  .filter((player) => player.position.type === "Goalie")
                  .map((player) => {
                    return (
                      <tr key={player.person.id}>
                        <td>{player.jerseyNumber}</td>
                        <td colSpan="3">{player.person.fullName}</td>
                        <td>{player.stats.goalieStats.saves}</td>
                        <td>{player.stats.goalieStats.shots}</td>
                        <td>
                          {Math.round(
                            player.stats.goalieStats.savePercentage * 10
                          ) / 10}
                          %
                        </td>
                        <td>{player.stats.goalieStats.timeOnIce}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
        </>
    )
}