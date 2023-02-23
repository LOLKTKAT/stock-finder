import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./home.css";
import RightSection from "../../containers/right-section/RightSection";
import SearchInput from "../../components/search-input/SearchInput";
import hand from "../../assets/images/hand.png";
import Logo from "../../components/logo/Logo";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="home__left-section __padding "
      >
        <Logo spClass={"logo-light"} />
        <section className="home__hand-container">
          <img src={hand} alt="hand" className="home__hand" />
        </section>
        <section className="home__input">
          <SearchInput
            placeholder={"Enter a ticker sybmol: AAPL, AMZN, TSLA"}
            classname={" big-search-input"}
          />
        </section>
      </motion.div>
      <RightSection>
        <div className="home__heading-container">
          <motion.h1
            layoutId="header"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ ease: "easeOut" }}
          >
            Find any stock you
          </motion.h1>
        </div>
        <div className="home__sub-heading-container">
          <h5>Find stocks, crypto coins, stock market indexes, and more</h5>
        </div>
      </RightSection>
    </div>
  );
};

export default Home;
