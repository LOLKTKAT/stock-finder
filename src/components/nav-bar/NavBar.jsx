import React from "react";
import "./nav-bar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__nav-links">
        <h4>Watchlist</h4>
        <h4>About</h4>
        <h4>Stocks</h4>
      </div>
      <div className="nav-bar__sign-up">
        <h4>Sign up</h4>
      </div>
    </div>
  );
};

export default NavBar;
