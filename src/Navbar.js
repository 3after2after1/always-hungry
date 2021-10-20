import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <h1>
          Meals <span>App</span>
        </h1>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/favorites">
            <li>Favorites</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
