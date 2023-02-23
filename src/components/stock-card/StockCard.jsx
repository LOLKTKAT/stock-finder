import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./stock-card.css";
import NOT_FOUND from "../../assets/images/not-found-logo.svg";
import { API_KEY, bounceEase } from "../../data/data";
import { motion } from "framer-motion";
import MeatBallMenu from "../meat-ball-menu/MeatBallMenu";

const StockCard = ({ stock }) => {
  const [stockData, setStockData] = useState({});
  const [loading, setloading] = useState(true);
  const [stockDiscription, setStockDiscription] = useState({});
  const [error, setError] = useState({ status: false, massage: "" });

  const STOCK_DATA_URL = `https://finnhub.io/api/v1/quote?symbol=${stock.item}&token=${API_KEY}`;
  const STOCK_DISCRIPTION = `https://finnhub.io/api/v1/stock/profile2?symbol=${stock.item}&token=${API_KEY}`;

  function fetchData(url, setFunction) {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          setError({ status: false, massage: "no errors" });
          return response.json();
        }
        setError({ status: true, massage: "Too many requests" });
        return response.json();
      })
      .then((data) => setFunction(data));
  }
  useEffect(() => {
    fetchData(STOCK_DATA_URL, setStockData);
    fetchData(STOCK_DISCRIPTION, setStockDiscription);
    setloading(false);
  }, [stock]);

  return !stockDiscription[0] ? (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="stock-card"
        key={stock.item}
      >
        {loading ? (
          <>looading...</>
        ) : (
          <>
            <section className="stock-card__row stock-card__first-row">
              <img
                src={stockDiscription.logo ? stockDiscription.logo : NOT_FOUND}
                alt="stock-icon"
                className="stock-card__stock-icon"
              />
              {/* <MeatBallMenu stock={stock} /> */}
            </section>
            <section className="stock-card__row">
              <div className="stock-card__heading-container">
                <Link className="dark-link" to={`/details/${stock.item}`}>
                  <h4>{stockDiscription.name}</h4>
                  <h3>{stock.item}</h3>
                </Link>
              </div>
              <div>
                <h4>{stockData.c}$</h4>
              </div>
            </section>
            <section className="stock-card__row">
              <div className="stock-card__p-change-container">
                {stockData.dp > 0 ? (
                  <>
                    <h4 style={{ color: "green" }}>▲</h4>
                    <h4
                      className="percentage-change"
                      style={{ color: "green" }}
                    >
                      {stockData.dp}
                    </h4>
                  </>
                ) : (
                  <>
                    <h4 style={{ color: "red" }}>▼</h4>
                    <h4 className="percentage-change" style={{ color: "red" }}>
                      {stockData.dp}
                    </h4>
                  </>
                )}
              </div>
            </section>
          </>
        )}
      </motion.div>
    </>
  ) : (
    <>dksj</>
  );
};

export default StockCard;
