import React, { useContext, useState, useEffect } from "react";
import { LeadersContext, PreviewContext, PlayerContext } from "../../../dispatch/dispatch";
import { useParams } from "react-router-dom";

export const Goalies = (props) => {
  const [team, setTeam] = useState("home");
  const [player, setPlayer, stats, setStats] = useContext(PlayerContext);
  const [preview, setPreview] = useContext(PreviewContext);
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([]);
  const [playerID, setPlayerID] = useState(null);

  const id = useParams();

  useEffect(() => {
    if (props.teams[0] === undefined) {
      return;
    } else {
      props.teams[0].roster.roster.forEach((player) => {
        fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=20222023`,
          {
            mode: "cors",
          }
        )
          .then((response) => response.json())
          .then((response) =>
            setAway((away) => [
              ...away,
              {
                person: player.person,
                position: player.position,
                jerseyNumber: player.jerseyNumber,
                stats: response.stats[0].splits,
              },
            ])
          )

          .catch((err) => console.error(err));
      });
      props.teams[1].roster.roster.forEach((player) => {
        fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=20222023`,
          {
            mode: "cors",
          }
        )
          .then((response) => response.json())
          .then((response) =>
            setHome((home) => [
              ...home,
              {
                person: player.person,
                position: player.position,
                jerseyNumber: player.jerseyNumber,
                stats: response.stats[0].splits,
              },
            ])
          )
          .catch((err) => console.error(err));
      });
    }
  }, [props.teams]);



  if (props.teams[0] === undefined === undefined) {
    return <></>;
  } else {
    return (
      <table id="tendy-table">
        <thead>
          
          <tr>
            <th>Goaltender Comparison</th>
          </tr>
        </thead>
        <tbody id="tendy-left-table">
          {away
            .filter(
              (player) =>
                player.position.abbreviation === "G" &&
                player.stats[0] !== undefined
            )
            .map((goalie) => {
              return (
                <tr key={goalie.person.id}>
                  {goalie.person.fullName}
                  
                  <tr>
                    <td>Record GAA SV% SO</td>
                  </tr>
                  <tr>
                    <td>
                      {goalie.stats[0].stat.wins}-{goalie.stats[0].stat.losses}-
                      {goalie.stats[0].stat.ot}{" "}
                      {parseFloat(
                        goalie.stats[0].stat.goalAgainstAverage.toFixed(2)
                      )}{" "}
                      {parseFloat(
                        goalie.stats[0].stat.savePercentage.toFixed(2)
                      )}
                      % {goalie.stats[0].stat.shutouts}
                    </td>
                  </tr>
                </tr>
              );
            })}
        </tbody>
        <tbody id="tendy-right-table">
          {home
            .filter(
              (player) =>
                player.position.abbreviation === "G" &&
                player.stats[0] !== undefined
            )
            .map((goalie) => {
              return (
                <tr key={goalie.person.id}>
                  {goalie.person.fullName}
                  <tr>
                    <td>Record GAA SV% SO</td>
                  </tr>
                  <tr>
                    <td>
                      {goalie.stats[0].stat.wins}-{goalie.stats[0].stat.losses}-
                      {goalie.stats[0].stat.ot}{" "}
                      {parseFloat(
                        goalie.stats[0].stat.goalAgainstAverage.toFixed(2)
                      )}{" "}
                      {parseFloat(
                        goalie.stats[0].stat.savePercentage.toFixed(2)
                      )}
                      % {goalie.stats[0].stat.shutouts}
                    </td>
                  </tr>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
};
