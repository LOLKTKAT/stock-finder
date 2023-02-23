import React, { useState } from "react";
import "./letter-filter.css";

const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const LetterFilter = ({ setLetterState, setShowedItems }) => {
  const { active, setActive } = useState(false);

  function handleClick(letter) {
    setLetterState(letter);
    setShowedItems(10);
    setActive(!active);
  }
  return (
    <div className="letterFilter">
      {LETTERS.map((letter) => {
        return (
          <div
            onClick={() => handleClick(letter)}
            className="letterFilter-letter-wrapper"
          >
            {active ? (
              <h4 className="letterFilter-letter active-letter">{letter}</h4>
            ) : (
              <h4 className="letterFilter-letter">{letter}</h4>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LetterFilter;
