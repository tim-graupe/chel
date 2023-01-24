import React, {useEffect, useState} from "react";


export const StatsLeaders = () => {
const [leagueLeaders, setLeagueLeaders] = useState([])

        const getLeagueLeaders = () => {
      fetch("https://api.nhle.com/stats/rest/en/leaders/skaters/points?cayenneExp=season=20202021%20and%20gameType=2", {
        mode: "cors",
        header: "Access-Control-Allow-Origin: ://.localhost/"
      })
        .then((response) => response.json())
        .then((response) =>
          console.log(
            response
          )
        )
        .catch((err) => console.error(err));
          
}
return (
    <div>
<button onClick={() => {
        getLeagueLeaders()
    }}>Click</button>

    </div>
)
}