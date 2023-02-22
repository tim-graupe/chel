import React, { useContext, useState } from "react";

import { Conference } from "./conference";
import { Division } from "./division";
import { Wildcard } from "./wildcard";
import { League } from "./league";
import { StandingsNav } from "./standings_nav";
import { LeadersContext, RosterContext } from "../../dispatch/dispatch";
export const Standings = (props) => {
  const [table, setTable] = useState("division");
  const [roster, setRoster] = useContext(RosterContext)
  const [leaders, setLeaders] = useContext(LeadersContext)
  const onChange = (e) => {
    setTable(e);
  };

  if (table === "division") {
    return (
      <>
        <StandingsNav onChange={onChange} />

        <Division name=""/>
      </>
    );
  } else if (table === "wildcard") {
    return (
      <>
        <StandingsNav onChange={onChange} />
        <Wildcard />
      </>
    );
  } else if (table === "conference") {
    return (
      <>
        <StandingsNav onChange={onChange} />
        <Conference />
      </>
    );
  } else {
    return (
      <>
        <StandingsNav onChange={onChange} />
        <League />;
      </>
    );
  }
};
