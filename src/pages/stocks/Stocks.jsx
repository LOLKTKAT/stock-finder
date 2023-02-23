import React, { useState, useEffect } from "react";
import LeftSection from "../../containers/left-section/LeftSection";
import RightSection from "../../containers/right-section/RightSection";
import "./stock.css";
import LeftNavBar from "../../containers/left-nav-bar/LeftNavBar";
import StockCard from "../../components/stock-card/StockCard";
import { modifiedTickerSymbolArray } from "../../data/data";
import LetterFilter from "../../components/letter-filter/LetterFilter";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

const Stocks = () => {
  // localStorage.setItem("symbols", JSON.stringify(modifiedTickerSymbolArray));
  // const [localStorageSymbols, setLocalStorageSymbols] = useState(
  //   JSON.parse(localStorage.getItem("symbols"))
  // );
  const stockWatchList = [];

  const location = useLocation();
  const stockData = [];
  const [count, setcount] = useState(4700);
  const [letterState, setLetterState] = useState("A");
  const [showedItems, setShowedItems] = useState(10);

  for (let i = 0; i < count; i++) {
    if (modifiedTickerSymbolArray[i][0].item.startsWith(letterState)) {
      stockData.push(modifiedTickerSymbolArray[i][0]);
    }
  }

  return (
    <div className="stocks">
      <LeftSection>
        <div className="stocks-container">
          <div>
            <LeftNavBar />
          </div>
          <div className="stocks__card-container">
            {stockData.slice(0, showedItems).map((stock, i) => {
              return <StockCard key={i} stock={stock} />;
            })}
          </div>
          <section className="stocks__show-more-container">
            <button
              className="show-more-btn"
              onClick={() => setShowedItems(showedItems + 5)}
            >
              Show more
            </button>
          </section>
        </div>
      </LeftSection>
      <RightSection>
        <div className="stock__right-seaction-container">
          <AnimatePresence>
            <motion.h1
              // layoutId="header"
              // initial={{ x: -100 }}
              // animate={{ x: 0 }}
              // exit={{ opacity: 0 }}
              // transition={{ ease: "easeOut" }}
              className="stocks__heading"
            >
              NASDAQ Stocks
            </motion.h1>
          </AnimatePresence>
          <LetterFilter
            setLetterState={setLetterState}
            setShowedItems={setShowedItems}
          />
          <h3>number of stocks: {stockData.length}</h3>
        </div>
      </RightSection>
    </div>
  );
};

export default Stocks;
