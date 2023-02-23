import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./search-input.css";
import magnifiying_glass from "../../assets/images/magnifiying-glass.svg";

const SearchInput = ({ placeholder, classname }) => {
  const navigate = useNavigate();
  const [tickerSymbol, setTickerSymbol] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setTickerSymbol(e.target.value);
  }
  function handleSubmit(e) {
    navigate(`/details/${tickerSymbol}`);
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`search-input-wrapper ${classname}`}
    >
      <img
        src={magnifiying_glass}
        alt="mag-glass"
        className="magnifiying-glass"
      />
      <input
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        type="text"
        className={`search-input`}
      />
    </form>
  );
};

export default SearchInput;
