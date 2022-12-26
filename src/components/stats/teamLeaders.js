import React from "react"

export const TeamLeaders = (props) => {
    if (props.leaders.length < 1){
        return <></>
    } else {
    return (
        <table id="roster-table"><caption>Team Leaders</caption>
        <thead><th colSpan="2">Points Leaders</th></thead>
        {props.leaders[0].leaders.map((player) => {
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
        {props.leaders[1].leaders.map((player) => {
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
        {props.leaders[2].leaders.map((player) => {
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
        {props.leaders[3].leaders.map((player) => {
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