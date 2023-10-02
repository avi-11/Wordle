import React from "react";
import Row from "./Row";

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <div className="mt-4">
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row currentGuess={currentGuess} key={i} />;
        }
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
};

export default Grid;
