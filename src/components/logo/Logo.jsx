import React from "react";
import { Link } from "react-router-dom";
import "./logo.css";

const Logo = ({ spClass }) => {
  return (
    <Link to="/">
      <div className={`logo ${spClass}`}>
        <h3>SH</h3>
      </div>
    </Link>
  );
};

export default Logo;
