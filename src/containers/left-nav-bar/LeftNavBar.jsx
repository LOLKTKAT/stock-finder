import React from "react";
import Logo from "../../components/logo/Logo";
import SearchInput from "../../components/search-input/SearchInput";
import "./left-nav-bar.css";
import { Link } from "react-router-dom";
const LeftNavBar = () => {
  return (
    <div className="left-nav-bar">
      <Link to="/">
        <Logo />
      </Link>
      <SearchInput
        placeholder={"AAPL"}
        classname={"search-input small-search-input"}
      />
    </div>
  );
};

export default LeftNavBar;
