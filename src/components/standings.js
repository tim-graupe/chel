import React, { useState } from "react";

import "../style sheets/standings.css";
import { Conference } from "./standings_components/conference";
import { Division } from "./standings_components/division";
import { Wildcard } from "./standings_components/wildcard";
import { League } from "./standings_components/league";
import { StandingsNav } from "./standings_components/standings_nav";
export const Standings = () => {
  const [table, setTable] = useState("division");

  const onChange = (e) => {
    setTable(e);
  };

  if (table === "division") {
    return (
      <>
        <StandingsNav onChange={onChange} />
        <Division />;
      </>
    );
  } else if (table === "wildcard") {
    return (
      <>
        <StandingsNav onChange={onChange} />
        <Wildcard />;
      </>
    );
  } else if (table === "conference") {
    return (
      <>
        <StandingsNav onChange={onChange} />
        <Conference />;
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
