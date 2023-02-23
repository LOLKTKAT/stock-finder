import React, { useState, useEffect } from "react";
import "./details.css";
import LeftSection from "../../../containers/left-section/LeftSection";
import RightSection from "../../../containers/right-section/RightSection";
import { useParams } from "react-router";
import CompanyInfo from "./components/CompanyInfo";
import LeftNavBar from "../../../containers/left-nav-bar/LeftNavBar";
import { API_KEY } from "../../../data/data";
import LineGraph from "../../../components/line-graph/LineGraph";

const Details = () => {
  const [stockData, setStockData] = useState([]);
  const [stockDiscription, setStockDiscription] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tickerSymbol } = useParams();

  let changePercentage = Number(
    ((stockData.c - stockData.o) / stockData.c) * 100
  ).toFixed(2);

  const STOCK_DATA_URL = `https://finnhub.io/api/v1/quote?symbol=${tickerSymbol}&token=${API_KEY}`;
  const STOCK_DISCRIPTION = `https://finnhub.io/api/v1/stock/profile2?symbol=${tickerSymbol}&token=${API_KEY}`;

  function fetchData(url, setFunction) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFunction(data))
      .then(setLoading(false));
  }

  useEffect(() => {
    fetchData(STOCK_DATA_URL, setStockData);
    fetchData(STOCK_DISCRIPTION, setStockDiscription);
  }, []);

  return (
    <div className="details">
      <div className="details__left-section">
        <LeftSection>
          <div className="details__left-content-container">
            <LeftNavBar />
            <LineGraph stockDiscription={stockDiscription} />
          </div>
        </LeftSection>
      </div>
      <RightSection>
        {stockDiscription.length == 0 ? (
          <h1 className="__margin-top">loading...</h1>
        ) : (
          <CompanyInfo
            stockDiscription={stockDiscription}
            stockData={stockData}
            changePercentage={changePercentage}
          />
        )}
      </RightSection>
    </div>
  );
};

export default Details;
