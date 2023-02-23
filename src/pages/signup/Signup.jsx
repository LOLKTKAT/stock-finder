import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="sign-up">
      <motion.h1
        layoutId="header"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        exit={{ x: 100 }}
        transition={{ ease: "easeOut" }}
      >
        Page under construction
      </motion.h1>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default Signup;
