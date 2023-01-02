import React, { useState } from "react";

import { Conference } from "./conference";
import { Division } from "./division";
import { Wildcard } from "./wildcard";
import { League } from "./league";
import { StandingsNav } from "./standings_nav";
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
