import React from "react";
import "./left-section.css";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";

const LeftSection = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="left-section"
    >
      {children}
      <Footer />
    </motion.div>
  );
};

export default LeftSection;
