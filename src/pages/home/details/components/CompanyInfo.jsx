import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../../UserContext";

const CompanyInfo = ({ stockDiscription, stockData, changePercentage }) => {
  const [added, setAdded] = useState(false);
  const [btnText, setBtnText] = useState("+ add to watchlist");

  const { watchListSymbols, setWatchListSymbols } = useContext(UserContext);
  const [localStorageSymbols, setLocalStorageSymbols] = useState(() => {
    const localData = localStorage.getItem("symbols");
    return localData ? JSON.parse(localData) : [];
  });

  function handleClick(symbol) {
    let exist = watchListSymbols.includes(symbol);
    if (symbol == null) {
      alert("Error: can't add a nonexistent stock");
    } else if (!exist) {
      watchListSymbols.push(symbol);
      saveToLocalStorage();
      setBtnText("- remove from watchlist");
    } else if (exist) {
      watchListSymbols.pop(symbol);
      setBtnText("+ add to watchlist");
      exist = false;
    }
    saveToLocalStorage();
  }

  function saveToLocalStorage() {
    localStorage.setItem("symbols", JSON.stringify(watchListSymbols));
  }

  useEffect(() => {
    setWatchListSymbols(localStorageSymbols);
  }, []);

  useEffect(() => {
    const symbol = stockDiscription.ticker;
    if (symbol) {
      const exist = watchListSymbols.includes(symbol);
      if (exist) {
        setBtnText("- remove from watchlist");
      }
    }
  }, [stockDiscription.ticker]);

  return (
    <>
      <section className="__margin-top company-info__header">
        <div>
          <h3>{stockDiscription.name}</h3>
          <h5>NASDAQ: {stockDiscription.ticker}</h5>
        </div>
        <div className="add-to-watchlist-div">
          <button
            className="add-to-watchlist-btn"
            onClick={() => handleClick(stockDiscription.ticker)}
          >
            {btnText}
          </button>
        </div>
      </section>
      <section className="__margin-top">
        {stockDiscription.name ? (
          <h1>
            {stockData.c} <span>usd</span>
          </h1>
        ) : (
          <h1>stock was not found</h1>
        )}
      </section>
      <section className="__mid-margin-top">
        {changePercentage < 0 ? (
          <h4 style={{ color: "red" }}>
            -{stockData.d} ({changePercentage})% today
          </h4>
        ) : (
          <h4 style={{ color: "green" }}>
            +{stockData.d} ({changePercentage})% today
          </h4>
        )}
      </section>
      <section className="details__stock-info-container __margin-top">
        <div className="details__stock-info">
          <h4>Current price</h4>
          <h4>{stockData.c}</h4>
        </div>
        <div className="details__stock-info">
          <h4>change</h4>
          <h4>{stockData.d}</h4>
        </div>
        <div className="details__stock-info">
          <h4>percent change</h4>
          <h4>{stockData.dp}</h4>
        </div>
        <div className="details__stock-info">
          <h4>high</h4>
          <h4>{stockData.h}</h4>
        </div>
        <div className="details__stock-info">
          <h4>low</h4>
          <h4>{stockData.l}</h4>
        </div>
        <div className="details__stock-info">
          <h4>opened</h4>
          <h4>{stockData.o}</h4>
        </div>
        <div className="details__stock-info">
          <h4>change</h4>
          <h4>{stockData.pc}</h4>
        </div>
      </section>
    </>
  );
};

export default CompanyInfo;
