import React, { useEffect, useState } from "react";

export const Leaders = (props) => {
  const [leaders, setLeaders] = useState({ current: "", list: [] });
  const [season, setSeason] = useState("20222023")

  useEffect(() => {
    const getLeaders = () => {
      fetch(
        `https://statsapi.web.nhl.com/api/v1/stats/leaders?leaderCategories=${props.stat}&season=${season}&limit=10&expand=person.currentTeam`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) =>
          setLeaders({
            current: response.leagueLeaders[0].leaders[0],
            list: response.leagueLeaders[0].leaders,
          })
        )
        .catch((err) => console.error(err));
    };
    



    getLeaders()
  }, [leaders]);

    // const getPlayerStats = (id) => {
    //   fetch(
    //     `https://statsapi.web.nhl.com/api/v1/people/${id}`,
    //     {
    //       mode: "cors",
    //     }
    //   )
    //     .then((response) => response.json())
    //     .then((response) => setPerson(response.people[0]))
    //     .catch((err) => console.error(err));
    // };

  if (leaders === undefined || leaders.current.person === undefined) {
    return <></>;
  } else {
    return (
      <div id="leaders-container">
                <div id="leader-bio">
          <img
            src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${leaders.current.person.id}.jpg`}
            alt="profile pic"
            className="table-pic"
          />
        <div id="portrait-info">{leaders.current.person.fullName} | {leaders.current.team.name}</div>
        <div id="stat-div">{props.stat.toUpperCase()} | {leaders.current.value}</div>
        </div>
        <ul id="leader-list">
          {leaders.list.map((skater) => {
            return (
              <li key={skater.person.id} onMouseOver={() => {
                setLeaders({current: skater, list: leaders.list})
              }}>{skater.person.fullName}</li>
            )
          })}
        </ul>
      </div>
    );
  }
};
