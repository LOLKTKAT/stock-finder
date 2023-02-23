import React from "react";
import RightSection from "../../containers/right-section/RightSection";
import LeftSection from "../../containers/left-section/LeftSection";
import LeftNavBar from "../../containers/left-nav-bar/LeftNavBar";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <LeftSection>
        <LeftNavBar></LeftNavBar>
      </LeftSection>
      <RightSection></RightSection>
    </div>
  );
};

export default About;
