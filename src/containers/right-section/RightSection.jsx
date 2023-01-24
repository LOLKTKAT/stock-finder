import React from "react";
import "./right-section.css";
import NavBar from "../../components/nav-bar/NavBar";

const RightSection = ({ children }) => {
  return (
    <div className="right-section">
      <NavBar />
      {children}
    </div>
  );
};

export default RightSection;
