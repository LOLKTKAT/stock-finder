import React, { useState, useContext, useEffect } from "react";
import "./meat-ball-menu.css";
import { UserContext } from "../../UserContext";
import { easeOut, motion } from "framer-motion";

const MeatBallMenu = ({ stock, stockWatchList }) => {
  const [added, setAdded] = useState(false);
  const { watchListSymbols, setWatchListSymbols } = useContext(UserContext);
  const [localStorageSymbols, setLocalStorageSymbols] = useState(() => {
    const localData = localStorage.getItem("symbols");
    return localData ? JSON.parse(localData) : [];
  });

  function saveToLocalStorage() {
    localStorage.setItem("symbols", JSON.stringify(watchListSymbols));
  }

  function handleClick(symbol) {
    if (symbol.added == false) {
      addToFavourites(symbol);
    } else if (symbol.added == true) {
      removeFromFravourits(symbol);
    }
  }

  function addToFavourites(symbol) {
    symbol.added = true;
    const newArr = [...watchListSymbols, symbol];
    setWatchListSymbols(newArr);
    saveToLocalStorage();
  }

  function removeFromFravourits(symbol) {
    symbol.added = false;
    const newArr = watchListSymbols.filter((item) => item.id !== symbol.id);
    setWatchListSymbols(newArr);
    // saveToLocalStorage();
  }

  // function isAdded() {
  //   const newArr = localStorageSymbols.filter((item) => item.id == stock.id);
  //   if (newArr.length == 0) {
  //     setAdded(false);
  //   }
  //   if (newArr.length > 0) {
  //     setAdded(true);
  //   }
  // }

  useEffect(() => {}, []);

  return (
    <motion.h3
      initial={{ rotate: 180, fontSize: "0", scale: 2 }}
      animate={{ rotate: 0, fontSize: "28px", scale: 1 }}
      exit={{ x: 0, y: -50 }}
      whileHover={{ scale: 1.3 }}
      transition={{ ease: "easeOut" }}
      key={stock.added}
      value={stock}
      onClick={() => handleClick(stock)}
      className="meat-ball-menu"
    >
      {stock.added ? "-" : "+"}
    </motion.h3>
  );
};

export default MeatBallMenu;
