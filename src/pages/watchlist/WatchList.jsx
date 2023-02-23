import React, { useContext, useEffect, useState } from "react";
import LeftSection from "../../containers/left-section/LeftSection";
import RightSection from "../../containers/right-section/RightSection";
import LeftNavBar from "../../containers/left-nav-bar/LeftNavBar";
import { motion } from "framer-motion";
import StockCard from "../../components/stock-card/StockCard";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import "./watchlist.css";
import WatchListCard from "./WatchListCard";

const WatchList = () => {
  const { watchListSymbols, setWatchListSymbols } = useContext(UserContext);
  // const a = localStorage.setItem("symbols", JSON.stringify(watchListSymbols));
  const [localStorageSymbols, setLocalStorageSymbols] = useState(() => {
    const localData = localStorage.getItem("symbols");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    console.log(localStorageSymbols);
  }, []);

  return (
    <div className="watchlist">
      <LeftSection>
        <section className="stocks-container">
          <div>
            <LeftNavBar />
          </div>
          {localStorageSymbols.length == 0 ? (
            <div className="watchlist__heading-container">
              <h2>There are no items</h2>
              <h4>
                You can add stocks from
                <Link to="/stocks"> here.</Link>
              </h4>
            </div>
          ) : (
            <div className="stocks__card-container">
              {localStorageSymbols.map((stock, i) => {
                return <WatchListCard key={i} stock={stock} />;
              })}
            </div>
          )}
        </section>
      </LeftSection>
      <RightSection>
        <motion.h1
          layoutId="header"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          transition={{ ease: "easeOut" }}
          className="watchlist-heading"
        >
          Number of stocks: {localStorageSymbols.length}
        </motion.h1>
        <br />
        <h3>
          You can add stocks from
          <Link to="/stocks"> here.</Link>
        </h3>
      </RightSection>
    </div>
  );
};

export default WatchList;
