import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-center">
        <Link to="/">
          <h2>MealsToCook</h2>
        </Link>
        <div className="nav-header"></div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
