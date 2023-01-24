import React from "react";
import "./search-input.css";

const SearchInput = ({ handleChange }) => {
  return (
    <input
      onChange={(e) => handleChange(e)}
      placeholder="Enter a ticker symbol...MSFT, AAPL, AMZN"
      type="text"
      className="search-input"
    />
  );
};

export default SearchInput;
