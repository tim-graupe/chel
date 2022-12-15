import React, { useEffect, useState } from "react";

export const TodaysGames = (props) => {
  const [gamesArray, setgamesArray] = useState([]);



    useEffect(() => {
        const todaysGames = () => {
            fetch("https://statsapi.web.nhl.com/api/v1/schedule", {
              mode: "cors",
            })
              .then((response) => response.json())
              .then((response) => setgamesArray(response.dates[0].games))
              .catch((err) => console.error(err));
          };
            todaysGames()
    }, [])

  return (
    <>


      <div id="todaysGamesFeed">
        {gamesArray.map((game) => {
          return (
            <div>
              <div className="feedCard">
                {game.teams.away.team.name} {<br></br>}
                {game.teams.away.score}
                {<br></br>}
              </div>{" "}
              @{" "}
              <div className="feedCard">
                {game.teams.home.team.name}
                {<br></br>}
                {game.teams.home.score}
              </div>
            {}
            </div>
          );
        })}
      </div>
    </>
  );
};
