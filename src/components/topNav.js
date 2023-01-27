import React from "react";
import { NavLink } from "react-router-dom";

export const TopNav = () => {
  return (
    <nav id="top-nav">
      <NavLink className="nav-links" to="/" activeStyle>
        Home{" "}
      </NavLink>

      <NavLink className="nav-links" to="/schedule" activeStyle>
        Schedule
      </NavLink>
      <NavLink className="nav-links" to="/standings" activeStyle>
        Standings
      </NavLink>
      <NavLink className="nav-links" to="/stats" activeStyle>
        Stats
      </NavLink>
    </nav>
  );
};
