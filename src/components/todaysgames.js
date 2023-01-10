import React, { useContext, useEffect, useState } from "react";

export const TodaysGames = () => {

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
    {/* {dogoco.age} */}

      <div id="todaysGamesFeed">
 
      </div>
    </>
  );
};
