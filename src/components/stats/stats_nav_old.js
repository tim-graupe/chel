// import React from "react";

// export const StatsNav = (props) => {
//   return (
//     <div id="stats-nav-container">
//       <div id="list-container">
//         <div className="division-container">
//           <h1 className="division-name">Metro</h1>
//           <div className="division-teams">
//             <select>
//               {props.metro.map((team) => {
//                 return (
//                   <option
//                     key={team.id}
//                     onClick={() => {
//                       props.showTeamStats(team.id);
//                       props.showRoster(team.id);
//                       props.showLeaders(team.id);
//                     }}
//                   >
//                     {team.name}
//                   </option>
//                 );
//               })}
//             </select>
//           </div>
//         </div>

//         <div className="division-container">
//           <h1 className="division-name">Atlantic</h1>
//           <div className="division-teams">
//             <select>
//               {props.atlantic.map((team) => {
//                 return (
//                   <option
//                     key={team.id}
//                     onClick={() => {
//                       props.showTeamStats(team.id);
//                       props.showRoster(team.id);
//                       props.showLeaders(team.id);
//                     }}
//                   >
//                     {team.name}
//                   </option>
//                 );
//               })}
//             </select>
//           </div>
//         </div>
//         <div className="division-container">
//           <h1 className="division-name">Central</h1>
//           <div className="division-teams">
//             <select>
//               {props.central.map((team) => {
//                 return (
//                   <option
//                     key={team.id}
//                     onClick={() => {
//                       props.showTeamStats(team.id);
//                       props.showRoster(team.id);
//                       props.showLeaders(team.id);
//                     }}
//                   >
//                     {team.name}
//                   </option>
//                 );
//               })}
//             </select>
//           </div>
//         </div>
//         <div className="division-container">
//           <h1 className="division-name">Pacific</h1>
//           <div className="division-teams">
//             <select>
//               {props.pacific.map((team) => {
//                 return (
//                   <option
//                     key={team.id}
//                     onClick={() => {
//                       props.showTeamStats(team.id);
//                       props.showRoster(team.id);
//                       props.showLeaders(team.id);
//                     }}
//                   >
//                     {team.name}
//                   </option>
//                 );
//               })}
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


//use below to stats.js
  // useEffect(() => {
  //   const getMetro = () => {
  //     fetch("https://statsapi.web.nhl.com/api/v1/teams", {
  //       mode: "cors",
  //     })
  //       .then((response) => response.json())
  //       .then((response) =>
  //         setMetro(
  //           response.teams.filter(
  //             (team) => team.division.name === "Metropolitan"
  //           )
  //         )
  //       )
  //       .catch((err) => console.error(err));
  //   };

  //   const getAtlantic = () => {
  //     fetch("https://statsapi.web.nhl.com/api/v1/teams", {
  //       mode: "cors",
  //     })
  //       .then((response) => response.json())
  //       .then((response) =>
  //         setAtlantic(
  //           response.teams.filter((team) => team.division.name === "Atlantic")
  //         )
  //       )
  //       .catch((err) => console.error(err));
  //   };
  //   const getCentral = () => {
  //     fetch("https://statsapi.web.nhl.com/api/v1/teams", {
  //       mode: "cors",
  //     })
  //       .then((response) => response.json())
  //       .then((response) =>
  //         setCentral(
  //           response.teams.filter((team) => team.division.name === "Central")
  //         )
  //       )
  //       .catch((err) => console.error(err));
  //   };
  //   const getPacific = () => {
  //     fetch("https://statsapi.web.nhl.com/api/v1/teams", {
  //       mode: "cors",
  //     })
  //       .then((response) => response.json())
  //       .then((response) =>
  //         setPacific(
  //           response.teams.filter((team) => team.division.name === "Pacific")
  //         )
  //       )
  //       .catch((err) => console.error(err));
  //   };
  //   getMetro();
  //   getAtlantic();
  //   getCentral();
  //   getPacific();
  // }, []);