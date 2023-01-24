import React, { useState, useEffect } from "react";
import "./details.css";
import LeftSection from "../../../containers/left-section/LeftSection";
import RightSection from "../../../containers/right-section/RightSection";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router";

const API_KEY = "cf7gjliad3iad4t62d10cf7gjliad3iad4t62d1g";

const Details = () => {
  const [stockData, setStockData] = useState([]);
  const [stockDiscription, setStockDiscription] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tickerSymbol } = useParams();

  let ChangePercentage = Number(
    ((stockData.c - stockData.o) / stockData.c) * 100
  ).toFixed(2);

  const STOCK_DATA_URL = `https://finnhub.io/api/v1/quote?symbol=${tickerSymbol}&token=${API_KEY}`;
  const STOCK_DISCRIPTION = `https://finnhub.io/api/v1/stock/profile2?symbol=${tickerSymbol}&token=${API_KEY}`;

  function fetchData(url, setFunction) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFunction(data));

    setLoading(false);
  }
  useEffect(() => {
    fetchData(STOCK_DATA_URL, setStockData);
    fetchData(STOCK_DISCRIPTION, setStockDiscription);
    console.log(stockDiscription);
  }, []);
  return (
    <div className="details">
      <LeftSection>
        <div className="__padding">
          {/* <img src={hand} alt="" height="200px" width="600px" /> */}
        </div>
      </LeftSection>
      <RightSection>
        <section className="__margin-top">
          <h3>{stockDiscription.name}</h3>
          <h4>NASDAQ: {tickerSymbol}</h4>
        </section>
        <section className="__margin-top">
          <h1>
            {stockData.c} <span>usd</span>
          </h1>
        </section>

        <section className="__mid-margin-top">
          {ChangePercentage < 0 ? (
            <h4 style={{ color: "red" }}>
              -{stockData.d} ({ChangePercentage})% today
            </h4>
          ) : (
            <h4 style={{ color: "green" }}>
              +{stockData.d} ({ChangePercentage})% today
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
      </RightSection>
    </div>
  );
};

export default Details;
