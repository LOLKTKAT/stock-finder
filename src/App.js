import React, { useState } from "react";
import Home from "./pages/home/Home";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import Details from "./pages/home/details/Details";
import "./App.css";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Stocks from "./pages/stocks/Stocks";
import { UserContext } from "./UserContext";
import WatchList from "./pages/watchlist/WatchList";
import About from "./pages/about/About";
import Signup from "./pages/signup/Signup";

function App() {
  const location = useLocation();
  const [localStorageSymbols, setLocalStorageSymbols] = useState(() => {
    const localData = localStorage.getItem("symbols");
    return localData ? JSON.parse(localData) : [];
  });
  const [watchListSymbols, setWatchListSymbols] = useState([]);

  const { tickerSymbol } = useParams("");

  return (
    <>
      <AnimateSharedLayout>
        <UserContext.Provider value={{ watchListSymbols, setWatchListSymbols }}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home tickerSymbol={tickerSymbol} />} />
            <Route path="/details/:tickerSymbol" element={<Details />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </UserContext.Provider>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
