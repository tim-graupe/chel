import React, { useContext } from "react"
import { LeadersContext } from "../../dispatch/dispatch";

export const TeamLeaders = () => {
    const [leaders, setLeaders] = useContext(LeadersContext)
    if (leaders[0] === undefined){
        return <></>
    } else {
    return (
        <table id="roster-table"><caption>Team Leaders</caption>
        <thead><th colSpan="2">Points Leaders</th></thead>
        {leaders[0].leaders.map((player) => {
            return (
                <tr><td><img
                src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                alt="profile pic"
                className="table-pic"
              />{player.person.fullName}</td>
              <td>{player.value}</td>
              </tr>
            )
        })}

<thead><th colSpan="2">Goals Scored</th></thead>
        {leaders[1].leaders.map((player) => {
            return (
                <tr><td><img
                src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                alt="profile pic"
                className="table-pic"
              />{player.person.fullName}</td>
              <td>{player.value}</td>
              </tr>
            )
        })}

<thead><th colSpan="2">Assists</th></thead>
        {leaders[2].leaders.map((player) => {
            return (
                <tr><td><img
                src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                alt="profile pic"
                className="table-pic"
              />{player.person.fullName}</td>
              <td>{player.value}</td>
              </tr>
            )
        })}

<thead><th colSpan="2">+/-</th></thead>
        {leaders[3].leaders.map((player) => {
            return (
                <tr><td><img
                src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`}
                alt="profile pic"
                className="table-pic"
              />{player.person.fullName}</td>
              <td>{player.value}</td>
              </tr>
            )
        })}

        </table>
    )
    }
};