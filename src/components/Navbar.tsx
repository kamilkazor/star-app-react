import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between h-16 sm:text-xl">
      <NavLink
        className={({ isActive }) =>
          isActive ? "duration-200 text-yellow-500" : "duration-200"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "duration-200 text-yellow-500" : "duration-200"
        }
        to="/starships"
      >
        Starships
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "duration-200 text-yellow-500" : "duration-200"
        }
        to="/tasks"
      >
        Tasks
      </NavLink>
    </nav>
  );
}

export default Navbar;
