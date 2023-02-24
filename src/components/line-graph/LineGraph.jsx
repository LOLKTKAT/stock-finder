import ReactApexChart from "react-apexcharts";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

// const url = `https://finnhub.io/api/v1/stock/candle?symbol=IBM&resolution=D&from=1572651390&to=1575243390&token=${API_KEY}`;
const proxy = `https://cors.eu.org/`;
const LineGraph = ({ stockDiscription }) => {
  const { tickerSymbol } = useParams();
  const [series, setSeries] = useState([]);
  const url = `${proxy}https://query1.finance.yahoo.com/v8/finance/chart/${tickerSymbol}`;

  const options = {
    chart: {
      type: "candlestick",
      fontFamily: "DM Sans, Helvetica, sans-serif",
    },

    title: {
      text: `${stockDiscription.name}`,
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  function round(number) {
    return number ? number.toFixed(2) : null;
  }

  async function getStocksData() {
    try {
      const response = await fetch(url);
      return await response.json();
      console.log(response);
    } catch (error) {}
  }
  async function fetchChartData() {
    const data = await getStocksData();
    try {
      const time = data.chart.result[0].timestamp;
      const open = data.chart.result[0].indicators.quote[0].open;
      const high = data.chart.result[0].indicators.quote[0].high;
      const low = data.chart.result[0].indicators.quote[0].low;
      const close = data.chart.result[0].indicators.quote[0].close;

      const priceInnerData = time.map((item, i) => {
        return {
          x: new Date(item * 1000),
          y: [open[i], high[i], low[i], close[i]].map(round),
        };
      });

      const prices = [
        {
          data: [...priceInnerData],
        },
      ];
      setSeries(prices);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchChartData();
    setTimeout(5000, fetchChartData());
  }, []);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="candlestick" />
    </div>
  );
};

export default LineGraph;

//   const priceInnerData = time.map((item, i) => {
//     return {
//       x: new Date(item),
//       y: [open[i], high[i], low[i], close[i]],
//     };
//   });

//   const prices = [
//     {
//       data: [...priceInnerData],
//     },
//   ];

//   setSeries(prices);
