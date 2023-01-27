import React from "react";
import { NavLink } from "react-router-dom";

export const TopNav = () => {
  return (
    <nav id="top-nav">
      <NavLink className="nav-links" to="/">
        Home{" "}
      </NavLink>

      <NavLink className="nav-links" to="/schedule">
        Schedule
      </NavLink>
      <NavLink className="nav-links" to="/standings">
        Standings
      </NavLink>
      <NavLink className="nav-links" to="/stats">
        Stats
      </NavLink>
    </nav>
  );
};
