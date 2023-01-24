import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./home.css";
import RightSection from "../../containers/right-section/RightSection";
import LeftSection from "../../containers/left-section/LeftSection";
import SearchInput from "../../components/search-input/SearchInput";
import hand from "../../assets/images/hand.png";

const Home = () => {
  const navigate = useNavigate();
  const [tickerSymbol, setTickerSymbol] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setTickerSymbol(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/details/${tickerSymbol}`);
  }
  return (
    <div className="home">
      <LeftSection>
        <div className="home__left-section __padding">
          <div className="home__hand-container">
            <img src={hand} alt="hand" className="home__hand" />
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <SearchInput handleChange={(e) => handleChange(e)} />
          </form>
        </div>
      </LeftSection>
      <RightSection>
        <div className="home__heading-container">
          <h1>Find any stock you want</h1>
        </div>
        <div className="home__sub-heading-container">
          <h5>Find stocks, crypto coins, stock market indexes, and more</h5>
        </div>
      </RightSection>
    </div>
  );
};

export default Home;
