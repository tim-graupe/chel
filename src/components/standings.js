import React, { useState } from "react";

import "../style sheets/standings.css";
import { Conference } from "./standings/conference";
import { Division } from "./standings/division";
import { Wildcard } from "./standings/wildcard";
import { League } from "./standings/league";
import { StandingsNav } from "./standings/standings_nav";
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
