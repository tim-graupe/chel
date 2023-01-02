import React, { useEffect, useState } from "react";

export const TodaysGames = (props) => {
  const [gamesArray, setgamesArray] = useState([]);



    // useEffect(() => {
    //     const todaysGames = () => {
    //         fetch("https://statsapi.web.nhl.com/api/v1/schedule", {
    //           mode: "cors",
    //         })
    //           .then((response) => response.json())
    //           .then((response) => setgamesArray(response.dates[0].games))
    //           .catch((err) => console.error(err));
    //       };
    //         todaysGames()
    // }, [])

  return (
    <>


      <div id="todaysGamesFeed">
    <h1>hi</h1>
      </div>
    </>
  );
};
