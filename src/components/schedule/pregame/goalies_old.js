// import React, { useContext, useState, useEffect } from "react";
// import { LeadersContext, PreviewContext } from "../../../dispatch/dispatch";
// import { useParams } from "react-router-dom";

// export const Goalies = (props) => {
//   const preview = useContext(PreviewContext)
//   const [tendies, setTendies] = useState([]);
//   const id = useParams();

//   useEffect(() => {
//     const getTendies = () => {
//       console.log(props.team)
//       props.team.roster.roster.forEach((player) => {
//         fetch(
//           `https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=20222023`,
//           {
//             mode: "cors",
//           }
//         )
//           .then((response) => response.json())
//           .then((response) =>
//             setTendies((tendies) => [
//               ...tendies,
//               {
//                 person: player.person,
//                 position: player.position,
//                 jerseyNumber: player.jerseyNumber,
//                 stats: response.stats[0].splits,
//               },
//             ])
//           )
//           .catch((err) => console.error(err));
//       });
//     };
//   getTendies()
//   }, []);

//   if (tendies === undefined) {
//     return <></>;
//   } else {
//     return (
//       <table id="tendy-table">
//         <thead>
          
//           <tr>
//             <th>Goaltender Comparison</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tendies
//             .filter(
//               (player) =>
//                 player.position.abbreviation === "G" &&
//                 player.stats[0] !== undefined
//             )
//             .map((goalie) => {
//               return (
//                 <tr key={goalie.person.id}>
//                   {goalie.person.fullName}
//                   <tr>
//                     <td>Record GAA SV% SO</td>
//                   </tr>
//                   <tr>
//                     <td>
//                       {goalie.stats[0].stat.wins}-{goalie.stats[0].stat.losses}-
//                       {goalie.stats[0].stat.ot}{" "}
//                       {parseFloat(
//                         goalie.stats[0].stat.goalAgainstAverage.toFixed(2)
//                       )}{" "}
//                       {parseFloat(
//                         goalie.stats[0].stat.savePercentage.toFixed(2)
//                       )}
//                       % {goalie.stats[0].stat.shutouts}
//                     </td>
//                   </tr>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     );
//   }
// };
