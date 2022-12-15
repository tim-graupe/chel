import React, { useEffect, useState } from "react";

import "../style sheets/standings.css";
export const Standings = () => {
  const [wildcard, setWildcard] = useState([]);

  useEffect(() => {
    const todaysGames = () => {
      fetch("https://statsapi.web.nhl.com/api/v1/standings", {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) =>
            setWildcard(response.records)
        )
        .catch((err) => console.error(err));
    };
    todaysGames();
  }, []);

  return (
    <div id="table-container">
        <button onClick={() => {
            console.log(wildcard)
        }}>Click</button>
    </div>
  );
};
