import React, { useState } from "react";
import "./right-section.css";
import NavBar from "../../components/nav-bar/NavBar";
import SideBarBtn from "../../components/side-bar-button/SideBarBtn";
import {
  easeOut,
  motion,
  AnimatePresence,
  easeIn,
  easeInOut,
} from "framer-motion";

const RightSection = ({ children }) => {
  const [show, setShow] = useState(true);
  function handleShow() {
    setShow(!show);
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          className={`right-section ${
            show ? "hide-side-bar" : "show-side-bar"
          }`}
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          exit={{ x: 500 }}
          key={show}
          transition={{ ease: easeOut, duration: 0.35 }}
        >
          <NavBar handleShow={handleShow} />
          {children}
        </motion.div>
      </AnimatePresence>
      <button className="hide-btn " onClick={() => handleShow()}>
        <SideBarBtn />
      </button>
    </>
  );
};

export default RightSection;
