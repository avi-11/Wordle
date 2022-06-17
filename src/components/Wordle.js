import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn } =
    useWordle(solution);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(guesses, isCorrect, turn);
  }, [guesses, isCorrect, turn]);
  return (
    <div>
      <h1>solution is - {solution}</h1>
      <h1>Current guess - {currentGuess}</h1>
      <Grid currentGuess={currentGuess} turn={turn} guesses={guesses} />
    </div>
  );
};

export default Wordle;
