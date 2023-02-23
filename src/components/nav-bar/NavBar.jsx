import React from "react";
import "./nav-bar.css";
import { NavLink, Link } from "react-router-dom";
import SideBarBtn from "../side-bar-button/SideBarBtn";
import { motion } from "framer-motion";

const NavBar = ({ handleShow }) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__nav-links">
        <NavLink to="/watchlist">
          <h4 className="nav-link">Watchlist</h4>
        </NavLink>
        <NavLink to="/stocks">
          <h4 className="nav-link">Stocks</h4>
        </NavLink>
        <NavLink to="/about">
          <h4 className="nav-link">About</h4>
        </NavLink>
        <Link to="/signup" className="light-link">
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            // transition={{ duration: 0.5 }}
            className="nav-bar__sign-up"
          >
            <h4>Sign up</h4>
          </motion.div>
        </Link>
        <div className="nav-bar__humbergur-menu" onClick={() => handleShow()}>
          <SideBarBtn />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
