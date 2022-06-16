import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp } = useWordle(solution);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);
  return (
    <div>
      <h1>Current guess - {currentGuess}</h1>
    </div>
  );
};

export default Wordle;
