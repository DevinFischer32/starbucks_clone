import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <NavLink
          to="/menu"
          // className={(navData) => (navData.isActive ? classes.active : "")}
        >
          Menu
        </NavLink>
        <NavLink to="/rewards">Rewards</NavLink>
        <NavLink to="/gifts">Gift Cards</NavLink>
      </div>
    </div>
  );
}
