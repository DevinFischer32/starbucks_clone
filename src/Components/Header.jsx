import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/menu"
        >
          Menu
        </NavLink>
        <NavLink to="/rewards">Rewards</NavLink>
        <NavLink to="/gifts">Gift Cards</NavLink>
      </div>
    </div>
  );
}
