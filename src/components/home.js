import React, { useContext, useEffect, useState } from "react";

export const Home = () => {
  const [preGamesArray, setPreGamesArray] = useState([]);
  const [renderedGamesArray, setRenderedGamesArray] = useState([]);
  useEffect(() => {
    const todaysGames = () => {
      fetch(
        "https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.linescore",
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) => setPreGamesArray(response))
        .then(preGamesArray.forEach(game => console.log(game)))
        .catch((err) => console.error(err));
    };

    todaysGames();
  }, []);


  if (renderedGamesArray.length < 1) {
    return <></>;
  } else
    return (
      <div id="home-page">
        <div id="todaysGamesFeed">
          {/* {gamesArray.map((game) => {
          return (
            <></>
          )
        })} */}
        </div>
      </div>
    );
};
